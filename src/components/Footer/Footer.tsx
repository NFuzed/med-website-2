import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#practice">Code of Practice</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#letters">Medical Letters</a></li>
                            <li><a href="#tests">Health Tests</a></li>
                            <li><a href="#vaccines">Vaccinations</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>For Business</h4>
                        <ul>
                            <li><a href="#corporate">Corporate Services</a></li>
                            <li><a href="#partnership">Partnership Program</a></li>
                            <li><a href="#travel">Travel Partners</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#terms">Terms and Conditions</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#accessibility">Accessibility</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 ZoomDoc Health. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#facebook" aria-label="Facebook">f</a>
                        <a href="#twitter" aria-label="Twitter">𝕏</a>
                        <a href="#instagram" aria-label="Instagram">📷</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
