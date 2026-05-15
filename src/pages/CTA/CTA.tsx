import './CTA.css'

const CTA = () => {
    const handleOrderClick = () => {
        const element = document.getElementById('pricing')
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section className="cta-section">
            <div className="container">
                <h2>Ready to Get Started?</h2>
                <p>
                    Take the first step towards understanding your heart health. Order your ECG monitoring service
                    today.
                </p>
                <button
                    className="btn btn-large btn-primary"
                    onClick={handleOrderClick}
                >
                    Order Your ECG Monitor Now
                </button>
            </div>
        </section>
    )
}

export default CTA
