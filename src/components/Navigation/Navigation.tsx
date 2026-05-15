import './Navigation.css'

const Navigation = () => {
    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="10" width="36" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
                        <path d="M8 20h4M16 18v4M22 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>ZoomDoc Health</span>
                </div>
                <div className="navbar-links">
                    <button
                        className="nav-link"
                        onClick={() => handleScrollToSection('overview')}
                    >
                        Find out more
                    </button>
                    <button
                        className="nav-link btn-primary"
                        onClick={() => handleScrollToSection('pricing')}
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
