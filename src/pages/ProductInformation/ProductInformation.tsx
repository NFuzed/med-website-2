import './ProductInformation.css'

const ProductInformation = () => {
    const whatIsPoints = [
        "This is where benefit one would go",
        "This is where benefit two would go",
        "This is where benefit three would go",
        "This is where benefit four would go",
        "This is where benefit five would go"
    ]

    const eligibilityPoints = [
        "This is where eligibility criteria one would go",
        "This is where eligibility criteria two would go",
        "This is where eligibility criteria three would go",
        "This is where eligibility criteria four would go",
        "This is where eligibility criteria five would go",
        "This is where eligibility criteria six would go"
    ]

    return (
        <section className="education-section">
            <div className="container">
                {/* Top Section: What is ProductX? */}
                <div className="education-grid education-grid-top">
                    <div className="education-content">
                        <h2>What is ProductX?</h2>
                        <p className="lead">
                            This is where the main description of ProductX would go. Explain what it is and how it works
                            in simple terms.
                        </p>
                        <p>
                            This is where additional context would go. Describe the use cases and scenarios where
                            ProductX is most valuable.
                        </p>
                        <ul className="benefits-list">
                            {whatIsPoints.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                        <p className="additional-note">
                            This is where any additional explanation or context would go about ProductX.
                        </p>
                    </div>
                    <div className="education-image">
                        <img
                            src="/pages/ProductInformation/image-top.jpg"
                            alt="ProductX demonstration"
                            className="education-img"
                        />
                    </div>
                </div>

                {/* Bottom Section: Who is this for? */}
                <div className="education-grid education-grid-bottom">
                    <div className="education-image">
                        <img
                            src="/pages/ProductInformation/image-bottom.jpg"
                            alt="ProductX users"
                            className="education-img"
                        />
                    </div>
                    <div className="education-content">
                        <h2>Who is ProductX For?</h2>
                        <p className="lead">
                            This is where the description of who would benefit from ProductX would go.
                        </p>
                        <ul className="benefits-list">
                            {eligibilityPoints.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                        <p className="eligibility-note">
                            This is where any important disclaimers or notes would go about ProductX usage.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInformation