import './Process.css'

const Process = () => {
    const steps = [
        {
            id: 'step-one',
            number: 1,
            title: "Step One Name",
            description: "This is where the description of step one would go. Explain what happens in this step."
        },
        {
            id: 'step-two',
            number: 2,
            title: "Step Two Name",
            description: "This is where the description of step two would go. Explain what happens in this step."
        },
        {
            id: 'step-three',
            number: 3,
            title: "Step Three Name",
            description: "This is where the description of step three would go. Explain what happens in this step."
        },
        {
            id: 'step-four',
            number: 4,
            title: "Step Four Name",
            description: "This is where the description of step four would go. Explain what happens in this step."
        }
    ]

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section className="process-section">
            <div className="container">
                <h2 className="section-title process-title">How ProductX Works – Simple Process</h2>

                <div className="process-button-wrapper">
                    <button
                        className="btn btn-primary-cyan process-cta"
                        onClick={() => handleScrollToSection('pricing')}
                    >
                        Order today
                    </button>
                </div>

                <div className="process-grid">
                    {steps.map((step) => (
                        <div key={step.id} className="process-step">
                            <div className="process-image-wrapper">
                                <img
                                    src={`./pages/Process/step-${step.number}.jpg`}
                                    alt={step.title}
                                    className="process-image"
                                />
                                <div className="process-number">{step.number}</div>
                            </div>
                            <div className="process-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process