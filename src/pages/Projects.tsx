import Section from "../components/Section"
import { projects } from "../data/projects"

export default function Projects() {
    return (
        <Section title="Projects">
            <div className="cards">
                {projects.map(p => (
                    <article key={p.name} className="card">
                        <header>
                            <h3>{p.name}</h3>
                        </header>
                        <p>{p.blurb}</p>
                        <p className="muted">{p.stack.join(" · ")}</p>
                        <div className="cardLinks">
                            {p.link && <a href={p.link} target="_blank">Live</a>}
                            {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    )
}
