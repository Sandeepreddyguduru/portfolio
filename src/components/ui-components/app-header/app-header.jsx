import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggler from "../theme-toggler/theme-toggler";
import LanguageSelector from "../translator/languageSelector";
import './app-header.scss'
import { PortfolioContext } from "../portfolio-context/portfolio-context";

const Header = (props) => {
    // let { setPage } = useContext(PortfolioContext);
    const {setPage} = PortfolioContext()
    const [active, setActive] = useState(1)
    const headerList = [
        { id: 1, name: 'Home' }, { id: 2, name: 'About' }, { id: 3, name: 'Lab' }
    ]
    return (
        <div className="portfolio-header">
            {/* <div className="portfolio-header-logo">Sandeep</div> */}
            <div className="portfolio-tabs d-flex gap-2 align-items-center">
                {headerList?.map((list, i) => {
                    return (
                        <div key={i} className="portfolio-tab" onClick={(e) => { e?.stopPropagation(); setActive(list?.id); setPage(list?.name) }}>
                            <div className={`portfolio-tab-text${list?.id === active ? ' active-tab' : ''}`}>{list?.name}</div>
                            {list?.id === active && <motion.div layoutId='active-pill' transition={{duration: 0.2}} className="active"></motion.div>}
                        </div>
                    )
                })}
                {/* } */}
                {/* <div className="portfolio-tab" onClick={(e) => { e?.stopPropagation(); props?.setPage('about') }}>
                    About */}
                {/* <div className="portfolio-tab-about">About</div> */}
                {/* <div className="portfolio-tab-owner">SANDEEP</div> */}
                {/* </div>
                <div className="portfolio-tab" onClick={(e) => { e?.stopPropagation(); props?.setPage('lab') }}>Lab</div> */}
            </div>
            {/* <div className="portfolio-header-menu">
            <ThemeToggler />
                <LanguageSelector />
            </div> */}
        </div>
    )
}
export default Header;