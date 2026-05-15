import './Hero.css'

const Hero = () => {
    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section className="hero">
            {/* Video Background */}
            <div className="hero-video-container">
                <video
                    className="hero-video"
                    autoPlay
                    muted
                    playsInline
                    onEnded={(e) => {
                        const video = e.target as HTMLVideoElement
                        video.style.opacity = '1'
                    }}
                >
                    <source src="/pages/Hero/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        The Future of<br/>
                        <span className="hero-title-highlight">ProductX<br/>Technology</span>
                    </h1>
                    <p className="hero-subtitle">
                        This is where the slogan would go, something catchy about ProductX
                    </p>
                    <div className="hero-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => handleScrollToSection('overview')}
                        >
                            Learn More
                        </button>
                        <button
                            className="btn btn-primary-cyan"
                            onClick={() => handleScrollToSection('pricing')}
                        >
                            Get Started
                        </button>
                    </div>
                    <div className="hero-badge">
                        <span className="badge-text">Top Rated</span>
                        <svg className="badge-stars" viewBox="0 0 100 20" fill="currentColor">
                            <polygon points="10,2 12,10 20,10 14,15 16,23 10,18 4,23 6,15 0,10 8,10" fill="#00a86b"/>
                            <polygon points="30,2 32,10 40,10 34,15 36,23 30,18 24,23 26,15 20,10 28,10"
                                     fill="#00a86b"/>
                            <polygon points="50,2 52,10 60,10 54,15 56,23 50,18 44,23 46,15 40,10 48,10"
                                     fill="#00a86b"/>
                            <polygon points="70,2 72,10 80,10 74,15 76,23 70,18 64,23 66,15 60,10 68,10"
                                     fill="#00a86b"/>
                            <polygon points="90,2 92,10 100,10 94,15 96,23 90,18 84,23 86,15 80,10 88,10"
                                     fill="#00a86b"/>
                        </svg>
                        <span className="badge-text">By Users</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero