import React, {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../card/card";

const Home = () => {
    const [selectFeature, setSelectFeature] = useState(null)

    const carousel = [
        { id: '1', slideName: 'First slide', slideText: 'Some representative placeholder content for the first slide.' },
        { id: '2', slideName: 'Second slide', slideText: 'Some representative placeholder content for the first slide.' },
        { id: '3', slideName: 'Third slide', slideText: 'Some representative placeholder content for the first slide.' },
    ];
    const features = [
        { id: '1', title: 'Voice Recognition', text: 'Keyboard free experience' },
        { id: '2', title: 'Theme Based Portfolio', text: 'you’ll get multiple colours to choose' },
        { id: '3', title: 'Multi-Langual Support', text: 'Switch between various languages' },
        { id: '4', title: 'Cross Browsing Ability', text: 'It will run on any browser' },
        { id: '5', title: 'Fully Responsive', text: 'you’ll have two different variations for web and mobile' },
        { id: '6', title: 'Sleek Animations', text: 'Smooth experience' }
    ]
    return (
        <>
            {/* Carosel */}
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    {carousel?.map((slide, i) => <button key={slide?.id} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className={i === 1 ? 'active' : ''} aria-current="true" aria-label={`Slide ${i + 1}`}></button>)}
                </div>
                <div className="carousel-inner h-100">
                    {carousel?.map((slide, i) => {
                        return (
                            <div key={slide?.id} className={`carousel-item h-100${i === 1 ? ' active' : ''}`}>
                                {/* <img src="..." className="d-block w-100" alt="..."> */}
                                <h1 className="carousel-title d-flex h-100 w-100 justify-content-center align-items-center">{slide?.slideName}</h1>
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="carousel-info">{slide?.slideText}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Carosel */}


            <section className="portfolio-intro container-fluid">
                <div className=" section container p-5 text-center">
                    <div className="section-title">
                        <div className="section-text-light">A Brief</div>
                        <div className="section-text-high-light">Introduction</div>
                    </div>
                    <div className="section-content">
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                        The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.
                    </div>
                    <motion.button
                        layout
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        onClick={() => { }}
                        className="portfolio-button py-3 px-5"
                    >Know more
                    </motion.button>
                </div>
            </section>


            <section className="feature-showcase container-fluid">
                <div className="section container p-5">
                    <div className="section-title">
                        <div className="section-text-high-light">Feature</div>
                        <div className="section-text-light">Showcase</div>
                    </div>

                    <div className="section-content">The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.</div>
                    <div className="features-container row">
                        {features?.map((list, i) => {
                            return (
                                <>
                                    <motion.div key={list?.id} layoutId={list?.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }} onClick={() => setSelectFeature(list)}
                                        className={`feature col-sm-6 col-md-4${i % 2 !== 0 ? ' even-card' : ' odd-card'}`}>
                                        <motion.p className="features-count">{list?.id}</motion.p>
                                        <motion.h3 className="features-title">{list?.title}</motion.h3>
                                        <motion.p className="features-text">{list?.text}</motion.p>
                                    </motion.div>
                                </>
                            )
                        })}
                    </div>
                    <AnimatePresence>
                        {!!selectFeature && (
                            <Card card={selectFeature} closeCard={setSelectFeature} />
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </>
    )
}
export default Home;