import React from "react";
import ThemeToggler from "../theme-toggler/theme-toggler";
import LanguageSelector from "../translator/languageSelector";
import './app-header.scss'

const Header = ()=>{
    return(
        <div className="portfolio-header">
            <div className="portfolio-header-logo">Sandeep</div>
            <div className="portfolio-header-menu">
            <ThemeToggler />
                <LanguageSelector />
            </div>
        </div>
    )
}
export default Header;