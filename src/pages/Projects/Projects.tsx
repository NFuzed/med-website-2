import {useEffect, useRef, useState} from "react";
import "./Projects.css";

const PROJECTS = [
    {
        id: "symbol-trainer",
        index: "01",
        title: "Schematic Symbol Trainer",
        period: "Feb 2025 — Jun 2025",
        category: "Computer Vision · AI Tooling",
        github: "https://github.com/NFuzed/Schematic-Symbol-Trainer-Graphical",
        summary:
            "An interactive desktop tool that lets engineers define, annotate, and train object detection models from as few as 10–20 examples per symbol — turning legacy schematic digitisation from a multi-day job into minutes.",
        highlights: [
            "Built annotation and snipping tools to generate synthetic datasets with minimal labelled data",
            "Supports Faster R-CNN, HOG + SVM, OpenCV template matching, and OpenAI CLIP pipelines",
            "Achieved 93% symbol matching accuracy on unseen test schematics",
            "Reduced model iteration time from days to hours via flexible dataset pipeline architecture",
        ],
        stack: ["Python", "PySide6", "PyTorch", "OpenCV", "Faster R-CNN", "CLIP"],
        accent: "#378add",
        accentDim: "rgba(55,138,221,0.08)",
        accentBorder: "rgba(55,138,221,0.22)",
        metric: {value: "93%", label: "accuracy on unseen schematics"},
    },
    {
        id: "minecraft-turtle",
        index: "02",
        title: "Minecraft Turtle Integration System",
        period: "Mar 2024 — Jun 2024",
        category: "Systems Architecture · Full Stack",
        github: "https://github.com/NFuzed/Computer-Craft-Kotlin",
        summary:
            "A microservices-based system that bridges Minecraft's ComputerCraft environment with real-world backend infrastructure — demonstrating robotics pipeline patterns through real-time command dispatching and 3D visualisation.",
        highlights: [
            "Designed two-way WebSocket communication between Minecraft and external services",
            "Built a modular 3D ReactJS front-end visualising turtle positions and environment state in real time",
            "Introduced RabbitMQ for reliable command dispatching and PostgreSQL for persistent world state",
            "Enabled authorised external control of in-game agents via a REST API",
        ],
        stack: ["Kotlin", "ReactJS", "WebSockets", "RabbitMQ", "PostgreSQL", "REST APIs"],
        accent: "#1d9e75",
        accentDim: "rgba(29,158,117,0.07)",
        accentBorder: "rgba(29,158,117,0.2)",
        metric: {value: "2-way", label: "real-time game ↔ backend sync"},
    },
];

function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            {threshold}
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return {ref, inView};
}

export default function Projects() {
    const {ref, inView} = useInView(0.05);
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section
            ref={ref}
            className={`proj${inView ? " proj--visible" : ""}`}
            id="projects"
        >
            <div className="proj__inner">

                {/* ── Header ── */}
                <div className="proj__header">
                    <div className="proj__section-label">
                        <span className="proj__label-line"/>
                        <span>Projects</span>
                    </div>
                    <div className="proj__header-row">
                        <h2 className="proj__heading">Things I've built.</h2>
                        <p className="proj__subheading">
                            Independent work alongside professional roles —
                            tools that solve real problems in technical domains.
                        </p>
                    </div>
                </div>

                {/* ── Project cards ── */}
                <div className="proj__list">
                    {PROJECTS.map((p, i) => (
                        <div
                            key={p.id}
                            className={`proj__card${hovered === p.id ? " proj__card--hovered" : ""}`}
                            style={{
                                animationDelay: `${i * 0.18}s`,
                                "--accent": p.accent,
                                "--accent-dim": p.accentDim,
                                "--accent-border": p.accentBorder,
                            } as React.CSSProperties}
                            onMouseEnter={() => setHovered(p.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Left: index + metric */}
                            <div className="proj__card-left">
                                <span className="proj__index">{p.index}</span>
                                <div className="proj__metric">
                                    <span className="proj__metric-value">{p.metric.value}</span>
                                    <span className="proj__metric-label">{p.metric.label}</span>
                                </div>
                            </div>

                            {/* Right: content */}
                            <div className="proj__card-right">
                                <div className="proj__card-top">
                                    <div>
                                        <div className="proj__category">{p.category}</div>
                                        <h3 className="proj__title">{p.title}</h3>
                                        <span className="proj__period">{p.period}</span>
                                    </div>
                                </div>

                                <p className="proj__summary">{p.summary}</p>

                                <ul className="proj__highlights">
                                    {p.highlights.map((h, j) => (
                                        <li key={j} className="proj__highlight">
                                            <span className="proj__highlight-bullet" aria-hidden="true"/>
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                <div className="proj__stack">
                                    {p.stack.map((s) => (
                                        <span key={s} className="proj__chip">{s}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Accent bar */}
                            <div className="proj__accent-bar" aria-hidden="true"/>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}