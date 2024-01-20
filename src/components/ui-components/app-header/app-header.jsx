import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggler from "../theme-toggler/theme-toggler";
import LanguageSelector from "../translator/languageSelector";
import './app-header.scss'
import { PortfolioContext } from "../portfolio-context/portfolio-context";

const Header = (props) => {
    // let { setPage } = useContext(PortfolioContext);
    const {setPage, page, headerLists} = PortfolioContext()
    const [active, setActive] = useState(1)

    return (
        <>
            <div className="portfolio-header">
                {/* <div className="portfolio-header-logo">Sandeep</div> */}
                <div className="portfolio-tabs d-flex gap-2 align-items-center">
                    {headerLists?.map((list, i) => {
                        return (
                            <div key={i} className="portfolio-tab" onClick={(e) => { e?.stopPropagation(); setActive(list?.id); setPage(list?.name) }}>
                                <div className={`portfolio-tab-text${list?.name === page ? ' active-tab' : ''}`}>{list?.name}</div>
                                {list?.name === page && <motion.div layoutId='active-pill' transition={{ duration: 0.2 }} className="active"></motion.div>}
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
            </div>
            <div className="portfolio-header-menu portfolio-header">
                    {/* <ThemeToggler />
                    <LanguageSelector /> */}
                </div>
        </>
    )
}
export default Header;