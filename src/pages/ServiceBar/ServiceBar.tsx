import './ServiceBar.css'

const ServiceBar = () => {
    const badges = [
        {
            id: 'badge-convenience',
            icon: 'badge-convenience.svg',
            title: 'This is where badge title one would go',
            subtitle: 'This is where subtitle one would go'
        },
        {
            id: 'badge-experts',
            icon: 'badge-experts.svg',
            title: 'This is where badge title two would go',
            subtitle: 'This is where subtitle two would go'
        },
        {
            id: 'badge-speed',
            icon: 'badge-speed.svg',
            title: 'This is where badge title three would go',
            subtitle: 'This is where subtitle three would go'
        }
    ]

    return (
        <section>
            {/* Badge row at top */}
            <div className="service-badges-row">
                <div className="container">
                    <div className="badges-grid">
                        {badges.map((badge) => (
                            <div key={badge.id} className="badge-item">
                                <div className="badge-icon">
                                    <img
                                        src={`/pages/ServiceBar/${badge.icon}`}
                                        alt={badge.title}
                                    />
                                </div>
                                <div className="badge-text">
                                    <p className="badge-title">{badge.title}</p>
                                    <p className="badge-subtitle">{badge.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceBar