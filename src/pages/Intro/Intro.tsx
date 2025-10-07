import "./Intro.css"
import {useCallback} from "react";
import {useTyping} from "../../hooks/useTyping";

type Props = { onDone?: () => void };

export default function Intro({onDone}: Props) {
    const handleDone = useCallback(() => {
        onDone?.();
    }, [onDone]);

    const {text} = useTyping("FURQAN FARUQUI", {onDone: handleDone});

    return (
        <div className="introWrap">
            <h1 className="introHeading" aria-live="polite">{text}</h1>
        </div>
    );
}
