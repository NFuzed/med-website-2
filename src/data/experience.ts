export type ExperienceItem = {
    company: string
    role: string
    period: string
    bullets: string[]
}

export const experience: ExperienceItem[] = [
    {
        company: "Graffica",
        role: "Software Engineer",
        period: "Jul 2023 — Present",
        bullets: [
            "Backend in Java, testing with Mockito; integration test ownership",
            "Work on HERMES train simulation tools and GSDR (diagram reader)",
            "Mentoring juniors; code reviews; CI improvements"
        ]
    },

    {
        company: "QA LTD",
        role: "Software Engineer",
        period: "Jun 2022 — Aug 2022",
        bullets: [
            "Completed a Level 3 Apprenticeship with hands-on experience in developing and implementing back-end projects, including a database management system.",
            "Acquired expertise in Java back-end programming with a focus on Spring Boot, Agile methodologies, Azure Cloud fundamentals, unit testing, and SQL databases",
            "Developed a project allowing 5000 users to input allergens, storing entries in a database for easy retrieval and management using Java, Spring Boot, and SQL for back-end development."
        ]
    }
]
