import Section from "../components/Section"

export default function Contact() {
    return (
        <Section title="Contact">
            <p>Reach out for collaborations, roles, or consultations.</p>
            <ul className="contactList">
                <li><a href="mailto:furqanfaruqui@gmail.com">furqanfaruqui@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/furqan-faruqui" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/NFuzed" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
        </Section>
    )
}
