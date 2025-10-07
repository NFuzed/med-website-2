import type {PropsWithChildren} from 'react'

type Props = PropsWithChildren<{
    title: string
    subtitle?: string
}>

export default function Section({ title, subtitle, children }: Props) {
    return (
        <div className="section">
            <header className="sectionHeader">
                <h2>{title}</h2>
                {subtitle && <p className="muted">{subtitle}</p>}
            </header>
            <div className="sectionBody">{children}</div>
        </div>
    )
}