import Section from "../components/Section"
import { experience } from "../data/experience"

export default function Experience() {
    return (
        <Section title="Experience">
            <ul className="timeline">
                {experience.map((item) => (
                    <li key={item.company} className="timelineItem">
                        <div className="timelineHeader">
                            <strong>{item.role}</strong> · <span className="muted">{item.company}</span>
                            <span className="period">{item.period}</span>
                        </div>
                        <ul className="bulletList">
                            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
