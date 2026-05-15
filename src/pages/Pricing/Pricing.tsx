import './Pricing.css'

const Pricing = () => {

    const pricingOptions = [
        {id: 1, duration: "24 Hour", price: 199, featured: false},
        {id: 2, duration: "48 Hour", price: 250, featured: false},
        {id: 3, duration: "72 Hour", price: 315, featured: true},
        {id: 4, duration: "5 Day", price: 370, featured: false},
        {id: 5, duration: "7 Day", price: 399, featured: false},
    ]

    function setSelectedDuration(duration: string) {
        console.log(duration)
    }

    const handleOrderClick = (duration: string) => {
        setSelectedDuration(duration)
        // This would typically handle payment/ordering logic
        alert(`Added ${duration} ECG Monitoring Service to cart`)
    }

    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <h2 className="section-title">Choose Your ProductX Plan</h2>
                <p className="section-intro">
                    This is where the pricing description would go. Explain what each plan includes and why someone
                    would choose it.
                </p>

                <div className="pricing-grid">
                    {pricingOptions.map((option) => (
                        <div
                            key={option.id}
                            className={`pricing-card ${option.featured ? 'featured' : ''}`}
                        >
                            {option.featured && <div className="featured-badge">Popular</div>}
                            <h3>{option.duration}</h3>
                            <p className="service-name">ProductX Plan</p>
                            <div className="price">£{option.price}.00</div>
                            <button
                                className={`btn btn-pricing ${option.featured ? 'btn-primary' : ''}`}
                                onClick={() => handleOrderClick(option.duration)}
                            >
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
