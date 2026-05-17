import './Overview.css'

const Overview = () => {
    const features = [
        {
            title: "Feature One Name",
            description: "This is where the description of feature one would go. Explain the key benefit and how it helps users.",
            icon: "cardiac"
        },
        {
            title: "Feature Two Name",
            description: "This is where the description of feature two would go. Explain the key benefit and how it helps users.",
            icon: "clinical"
        },
        {
            title: "Feature Three Name",
            description: "This is where the description of feature three would go. Explain the key benefit and how it helps users.",
            icon: "ai"
        },
        {
            title: "Feature Four Name",
            description: "This is where the description of feature four would go. Explain the key benefit and how it helps users.",
            icon: "device"
        },
        {
            title: "Feature Five Name",
            description: "This is where the description of feature five would go. Explain the key benefit and how it helps users.",
            icon: "private"
        },
    ]

    return (
        <section className="features-grid" id="overview">
            <div className="container">
                <h2 className="section-title">Why Choose ProductX</h2>
                <div className="features-cards-grid">
                    {features.map((feature) => (
                        <div key={feature.title} className="feature-card">
                            <div className="feature-icon-wrapper">
                                <img
                                    src={`./pages/Overview/${feature.icon}.svg`}
                                    alt={feature.title}
                                    className="feature-icon-img"
                                />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}

                    <div className="features-image">
                        <img
                            src={'./pages/Overview/overview-image.jpg'}
                            alt="ProductX in action"
                            className="features-image-img"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Overview