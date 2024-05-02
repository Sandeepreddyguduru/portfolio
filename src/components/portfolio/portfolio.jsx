import React, { useContext, useState } from "react";
import Trans from "../ui-components/translator/trans";
import './portfolio.scss';
import Assistance from "../ui-components/assistance/assistance";
import Header from "../ui-components/app-header/app-header";
import Footer from "../ui-components/footer/footer";
import Home from "../ui-components/home/home";
import About from "../ui-components/about/about";
import Contact from "../ui-components/contact/contact";
import Lab from '../ui-components/lab/lab';
import { PortfolioContext } from "../ui-components/portfolio-context/portfolio-context";
import { motion } from "framer-motion";


// export const portfolioContext = createContext();
// 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

// - web developer
// - with 5 plus years of experience
// - I used handle Client side programing
// - specialization in React JS, Redux, Javascript, HTML, CSS and other front end frame works
// - mention that im more passionate about my work 
// - Quick and self learner
// - Better understading of the requirement
// - used to discuss with Product Management team and also suggesting them
// - Problem sovling methodology
// - On-time deliverable


const Portfolio = () => {
    const { page, appTheme, language, appLanguages, openMenu, mobile, openMenuClick } = PortfolioContext();
    

    const animationVarients = {
        closeMenu: {
            // left: '70%',
            left: 0,
            // height: '',
            // overflow: 'unset',
            scale: [0.9, 0.89, 1],
            // translateY:'0%',
            transition: {
                duration: 0.5
            }
        },
        openMenu: {
            left: '80%',
            scale: [1, 0.89, 0.8],
            // overflow: 'hidden',
            // hight: '100vh',
            // translateY:'-4%',
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <>
            <div className={`portfolio-main-app${mobile ? ' portfolio-main-mobile' : ''} ${appTheme}-theme ${appLanguages?.find(lang => lang?.type === language)?.name}-language`} id="portfolio-main-app-id">
                <Header />
                <motion.div
                    id="portfolio-content-id"
                    className={`portfolio-content${openMenu ? ' menu-expanded' : ' menu-closed'}`}
                    variants={animationVarients}
                    animate={openMenu ? 'openMenu' : 'closeMenu'}
                    onClick={()=>openMenu && openMenuClick()}
                >
                    {page?.toLocaleLowerCase() === 'home' && <Home />}
                    {page?.toLocaleLowerCase() === 'about' && <About />}
                    {(page?.toLocaleLowerCase() === 'contact') && <Contact />}
                    {page?.toLocaleLowerCase() !== 'contact'&& <Footer />}
                    {language === 'en' && <Assistance />}
                </motion.div>
            </div>
        </>
    )
}
export default Portfolio;