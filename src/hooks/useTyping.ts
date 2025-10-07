// src/hooks/useTyping.ts
import { useEffect, useMemo, useRef, useState } from "react";

type Options = {
    speed?: number;
    preludeBlinks?: number;
    cursor?: string;
    wrapLeft?: string;
    wrapRight?: string;
    speedKey?: string;
    onDone?: () => void;
};

export function useTyping(target: string, opts: Options = {}) {
    const {
        speed = 200,
        preludeBlinks = 2,
        cursor = "_",
        wrapLeft = "{",
        wrapRight = "}",
        speedKey = "stepDenominator",
        onDone,
    } = opts;
    const onDoneRef = useRef<typeof onDone>(onDone);
    useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

    const speedFactor = useMemo(() => {
        try {
            const stored = Number(localStorage.getItem(speedKey));
            return Number.isFinite(stored) && stored > 0 ? stored : 1;
        } catch { return 1; }
    }, [speedKey]);

    const [frame, setFrame] = useState(`${wrapLeft} ${wrapRight}`);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0, timer: number | undefined, cancelled = false;

        const schedule = (ms: number) => { timer = window.setTimeout(tick, ms); };

        const tick = () => {
            if (cancelled) return;

            if (i <= target.length) {
                const typed = target.slice(0, i);
                const mid = i < target.length ? typed + cursor : typed;
                setFrame(`${wrapLeft}${mid}${wrapRight}`);
                i += 1;

                if (i > target.length) {
                    setDone(true);
                    setFrame(`${wrapLeft}${target}${wrapRight}`);
                    try { localStorage.setItem(speedKey, "2"); } catch {}
                    onDoneRef.current?.();
                    return;
                }
                schedule(speed / speedFactor);
            }
        };

        schedule(speed / speedFactor);
        return () => { cancelled = true; if (timer) window.clearTimeout(timer); };
    }, [target, speed, preludeBlinks, cursor, wrapLeft, wrapRight, speedFactor, speedKey]);

    return { text: frame, done };
}
