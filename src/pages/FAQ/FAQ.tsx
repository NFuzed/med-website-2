import './FAQ.css'

const FAQ = () => {
    const faqs = [
        {
            question: "Is at-home ECG monitoring accurate?",
            answer: "Yes. The service uses clinically validated, medical-grade equipment to ensure at-home testing is accurate. All recordings are reviewed by clinicians experienced in heart rhythm disorders, supported by AI analysis. Our ZoomDoc UK GPs review the findings to ensure accurate interpretation and guidance. However, no test can detect all conditions in every case."
        },
        {
            question: "Do I need a referral?",
            answer: "No referral is required. You may choose to share your report with your GP or cardiologist."
        },
        {
            question: "How discreet is the device?",
            answer: "The monitor is small, completely wire-free and designed to be worn under clothing during normal daily activities. The monitor is designed to be worn comfortably by men or women."
        },
        {
            question: "When will I receive my results?",
            answer: "Reports are provided after the device is returned and analysis is completed. Once your returned device has been received, analysis and reporting are usually complete within 48 hours."
        },
        {
            question: "Can I wear the device in the shower?",
            answer: "Yes. The Cortium C3W device is water-resistant and designed to be worn in the shower, whilst exercising or during normal day-to-day activity. It should not be fully immersed in water or used in saunas or infrared cabins."
        },
        {
            question: "Can I get ECG monitoring from my own GP?",
            answer: "Yes. Your GP can make an initial assessment. Our service is designed for individuals seeking comprehensive monitoring and reporting over one to seven days with the convenience of a private and time-efficient at-home service."
        }
    ]

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <h2>Your Questions Answered</h2>
                <div className="faq-grid">
                    {faqs.map((faq) => (
                        <div key={faq.question} className="faq-item">
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
