import './Deliverables.css'

const Deliverables = () => {
    const deliverables = [
        "Clear Summary of Findings",
        "Detection of Abnormal Heart Rhythms",
        "Heart Rate Trends and Variability",
        "ECG Rhythm Strips",
        "Plain-English Explanation",
        "Shareable PDF for Your GP"
    ]

    return (
        <section className="deliverables-section">
            <div className="container">
                <h2>What You Receive</h2>
                <p className="section-intro">Your detailed clinical report includes:</p>
                <div className="deliverables-grid">
                    {deliverables.map((item) => (
                        <div key={item} className="deliverable">
                            <div className="deliverable-icon">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 12H40V36C40 38.2 38.2 40 36 40H12C9.8 40 8 38.2 8 36V12Z"
                                          stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                    <path d="M12 12V8C12 6.9 12.9 6 14 6H34C35.1 6 36 6.9 36 8V12" stroke="currentColor"
                                          strokeWidth="2" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h4>{item}</h4>
                        </div>
                    ))}
                </div>
                <p className="delivery-note">
                    You will receive your clinical report within 48 hours of receipt of the returned device.
                </p>
            </div>
        </section>
    )
}

export default Deliverables
