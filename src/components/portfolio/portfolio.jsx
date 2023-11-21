import React, { useContext, useState } from "react";
import Trans from "../ui-components/translator/trans";
import './portfolio.scss';
import Assistance from "../ui-components/assistance/assistance";
import Header from "../ui-components/app-header/app-header";
import Footer from "../ui-components/footer/footer";
import Home from "../ui-components/home/home";
import About from "../ui-components/about/about";
import Lab from '../ui-components/lab/lab';
import { PortfolioContext } from "../ui-components/portfolio-context/portfolio-context";


// export const portfolioContext = createContext();
// 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
const Portfolio = () => {
    const { page, appTheme } = PortfolioContext();

    return (
        <>
            <div className={`portfolio-main-app h-100 ${appTheme}-theme`}>
                <div className="portfolio-content">
                    <Header />
                    {page?.toLocaleLowerCase() === 'home' && <Home />}
                    {page?.toLocaleLowerCase() === 'about' && <About />}
                    {page?.toLocaleLowerCase() === 'lab' && <Lab />}
                    <Footer />
                    {/* <Assistance />
                <div><Trans Translate={'welcome'}></Trans></div> */}
                </div>
            </div>
        </>
    )
}
export default Portfolio;