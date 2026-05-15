import './Service.css'

const Service = () => {
    return (
        <section className="service-section">
            {/* Background */}

            <div className="service-background">
                <img
                    src="/sections/Service/medical-bg.jpg"
                    alt="Background pattern"
                    className="service-bg-img"
                />
            </div>

            {/* Main content */}
            <div className="service-content">
                <div className="container">
                    <div className="service-grid">
                        {/* Left: Device Image */}
                        <div className="service-device">
                            <img
                                src="/sections/Service/oximeter.webp"
                                alt="ProductX device"
                                className="device-img"
                            />
                        </div>

                        {/* Right: Text Content */}
                        <div className="service-text">
                            <h2 className="service-title">
                                This is where the main title would go
                            </h2>

                            <p className="service-description">
                                This is where the first paragraph would go. Explain the key benefit and what makes
                                ProductX special. Keep it compelling and benefit-focused.
                            </p>

                            <p className="service-body">
                                This is where the longer description would go. Provide more details about how the
                                service works, what customers can expect, and why they should choose ProductX. This is
                                your opportunity to build confidence and address potential concerns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service