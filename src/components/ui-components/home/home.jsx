import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../card/card";
import { PortfolioContext } from "../portfolio-context/portfolio-context";
import Trans from "../translator/trans";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const [selectFeature, setSelectFeature] = useState(null);
    const { transcript, response } = PortfolioContext();

    const { t } = useTranslation();
    const carousel = t('home.header', { returnObjects: true });
    const features = t('home.showcase.features', { returnObjects: true });

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
                <h2>{transcript} - {response}</h2>
                <div className=" section container p-5 text-center">
                    <div className="section-title">
                        <div className="section-text-light"><Trans Translate={'home.intro.section.title1'}></Trans></div>
                        <div className="section-text-high-light"><Trans Translate={'home.intro.section.title2'}></Trans></div>
                    </div>
                    <div className="section-content">
                        <p><Trans Translate={'home.intro.description.content1'}></Trans><Trans Translate={'home.intro.description.content2'}></Trans></p>
                        <p><Trans Translate={'home.intro.description.content3'}></Trans><Trans Translate={'home.intro.description.content4'}></Trans></p>
                    </div>
                    <motion.button
                        layout
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        onClick={() => { }}
                        className="portfolio-button py-3 px-5"
                    ><Trans Translate={'home.intro.knowMore'}></Trans>
                    </motion.button>
                </div>
            </section>


            <section className="feature-showcase container-fluid">
                <div className="section container p-5">
                    <div className="section-title">
                        <div className="section-text-high-light"><Trans Translate={'home.showcase.section.title1'}></Trans></div>
                        <div className="section-text-light"><Trans Translate={'home.showcase.section.title2'}></Trans></div>
                    </div>

                    <div className="section-content"><Trans Translate={'home.showcase.title1'}></Trans></div>
                    <div className="features-container row">
                        {features?.map((list, i) => {
                            return (
                                <motion.div key={list?.id}
                                    layoutId={list?.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    // onClick={() => setSelectFeature(list)}
                                    className={`feature col-sm-6 col-md-4${i % 2 !== 0 ? ' even-card' : ' odd-card'}`}>
                                    <motion.p className="features-count">{list?.id}</motion.p>
                                    <motion.h3 className="features-title">{list?.feature}</motion.h3>
                                    <motion.p className="features-text">{list?.text}</motion.p>
                                </motion.div>
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