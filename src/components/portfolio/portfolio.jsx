import React, { createContext, useState } from "react";
import Trans from "../ui-components/translator/trans";
import './portfolio.scss';
import '../ui-components/theme-scss/__all.scss'
import Assistance from "../ui-components/assistance/assistance";
import Header from "../ui-components/app-header/app-header";

export const portfolioContext = createContext();
// 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
const Portfolio = () => {
    const [theme, setTheme] = useState()
    return (
        <portfolioContext.Provider value={[theme, setTheme]}>
            <div className={`portfolio-main-app${theme ? ' dark-theme' : ' light-theme'}`}>
                <div className="portfolio-content">
                <Header />
                <div>
                    
                </div>
                <Assistance />
                <div><Trans Translate={'welcome'}></Trans></div>
                </div>
            </div>
        </portfolioContext.Provider>
    )
}
export default Portfolio;