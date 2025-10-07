export type Project = {
    name: string
    blurb: string
    stack: string[]
    link?: string
    repo?: string
}

export const projects: Project[] = [
    {
        name: "Schematic Symbol Trainer",
        blurb: "Tooling to learn symbol concepts from variants and detect them in new schematics.",
        stack: ["Python", "PyTorch", "PySide6"],
        repo: "https://github.com/NFuzed/Schematic-Symbol-Trainer-Graphical"
    },
    {
        name: "HERMES Utilities",
        blurb: "Helpers and integrations for rail simulation workflows.",
        stack: ["Java", "Mockito", "Integration tests"]
    }
]
