import React from "react";
import ReactImg from '../../../image/react.png';
import './about.scss'

const About = () => {
    const organisations = [
        { name: 'Polyglot IT Solutions', role: 'Softwere Associate', from: '', to: '', exp: '1yr 6months', info: 'The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.' },
        { name: 'Zyclyx', role: 'Web Developer', from: '', to: '', exp: '1yr 4months', info: 'The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.' },
        { name: 'Current', role: 'Softwere Associate', from: '', to: '', exp: '', info: 'The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.' }
    ]
    const technical = [
        { img: ReactImg, name: 'Rect Js', type: 'library' },
        { img: '', name: 'REDUX', type: 'library' },
        { img: '', name: 'Java Script', type: 'library' },
        { img: '', name: 'HTML', type: 'web' },
        { img: '', name: 'CSS', type: 'web' },
        { img: '', name: 'Bootstrap', type: 'framework' },
        // {img: '', name: 'REDUX', type: '' },
        // {img: '', name: 'REDUX' , type: ''}, 
    ]
    return (
        <div className="portfolio-about">
            <section className="portfolio-main-header">
                <div className="owner-name">
                    <div className="owner-name-outline">SANDEEP</div>
                    <div className="owner-full-name">SANDEEP REDDY GUDURU</div>
                </div>
                <div className="owner-designation-main">
                    <div className="dash-line"></div>
                    <div className="owner-designation">Senior Softwere Engineer</div>
                    <div className="dash-line"></div>
                </div>
            </section>

            <div className="container-fluid section p-5">
                <div className="container py-5">
                    <div className="section-title">
                        <div className="section-text-light">About</div>
                        <div className="section-text-high-light">My Self</div>
                    </div>
                    <div className="section-content py-4">
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                    </div>
                </div>
            </div>

            <div className="experience-container container-fluid section">
                <div className="container py-5">
                    <div className="section-title">
                        <div className="section-text-light">Work</div>
                        <div className="section-text-high-light">Experience</div>
                    </div>
                    <div className="section-content py-4">
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                    </div>
                    <div className="experience-cards">
                        {organisations?.map((org, i) => {
                            return (
                                <div key={i} className="experience-card p-4">
                                    <div className="org-info">
                                        <div className="org-name">{org?.name}</div>
                                        <div className="dot">.</div>
                                        <div className="org-role">{org?.role}</div>
                                    </div>
                                    <div className="experience-info">{org?.info}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="technical-container container-fluid section p-5">
                <div className="container">
                    <div className="section-title">
                        <div className="section-text-high-light">Technical</div>
                        <div className="section-text-light">Stack</div>
                    </div>
                    <div className="section-content py-4">
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                    </div>
                    <div className="technical-cards">
                        {technical?.map((tech, i) => {
                            return (
                                <div key={i} className="tech-card p-2">
                                    <img className="tech-card-img" src={tech?.img} alt='tech' />
                                    <div className="tech-name p-2">{tech?.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="work-together-container container-fluid section p-5">
                <div className="container">
                    <div className="section-title">
                        <div className="section-text-light">Let's</div>
                        <div className="section-text-light">Work</div>
                    </div>
                    <div className="section-text-high-light">Together</div>
                    <div className="section-content py-4">
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                    </div>
                    <div className="contact-details">
                        <a href="tel:9494785839" className="contact-phone">9494785839</a> |
                        <a href="mailto:webdev.sandeep.g@gmail.com" className="contact-email">webdev.sandeep.g@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;