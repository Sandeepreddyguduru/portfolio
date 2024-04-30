import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import ThemeToggler from "../theme-toggler/theme-toggler";
import LanguageSelector from "../translator/languageSelector";
import './app-header.scss'
import { PortfolioContext } from "../portfolio-context/portfolio-context";
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useDispatch } from "react-redux";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import Trans from "../translator/trans";
import { updateTheme } from "../../../store/actions/app-actions";

const Header = (props) => {
    const { setPage, page, active, setActive, theme, setTheme, headerLists, openMenuClick, mobile, openMenu } = PortfolioContext()
    const dispatch = useDispatch()

    const [isExpand, setIsExpand] = useState(false);
    const [selectTab, setSelectTab] = useState({ id: 0, name: 'Themes' })
    const menuTabs = [{ id: 0, name: 'Themes' }, { id: 1, name: 'Languages' }];

    // const openMenuClick = () => {
    //     setOpenMenu(!openMenu);
    //     let content = document.getElementById('portfolio-content-id')
    //     setTimeout(() => {
    //         if (content) {
    //             content?.classList?.remove('menu-closed')
    //         }
    //     }, 550);
    // }

    const toggleTheme = (e) => {
        e?.stopPropagation();
        if(theme === 'light') {
            setTheme('dark')
            dispatch(updateTheme('dark'))
        } else {
            setTheme('light')
            dispatch(updateTheme('light'))
        }
    }

    return (
        <>  
            {mobile && <div className="portfolio-mobile-name">
                {/* <div className="portfolio-name"><Trans Translate={'about.my.surname'}/></div> */}
                <div className="portfolio-name"><Trans Translate={'about.my.fullName'}/></div>
            </div>}
            <div className={`portfolio-header${mobile ? ' portfolio-header-mobile': ''}`}>
                <div className="portfolio-tabs d-flex gap-2 align-items-center">
                    {headerLists?.map((list, i) => {
                        return (
                            <div key={i} className="portfolio-tab" onClick={(e) => { e?.stopPropagation(); setActive(list?.id); setPage(list?.name) }}>
                                {mobile && <div className={`menu-icon${((list?.name === page) || (list?.id === active)) ? ' active-tab' : ''}`}>{ list?.icon }</div>}
                                <div className={`portfolio-tab-text${((list?.name === page) || (list?.id === active)) ? ' active-tab' : ''}`}>{list?.name}</div>
                                {((list?.name === page) || (list?.id === active)) && <motion.div layoutId='active-pill' transition={{ duration: 0.2 }} className="active"></motion.div>}
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* <button className={`portfolio-header-menu${isExpand ? ' expand' : ' not-expand'}`} onClick={() => setIsExpand(true)} onBlur={() => setIsExpand(false)}>
                {isExpand ? <div className="portfolio-header">
                    <div className="portfolio-tabs d-flex gap-2 align-items-center">
                        {menuTabs?.map((list, i) => {
                            return (
                                <div key={i} className="portfolio-tab" onClick={(e) => { e?.stopPropagation(); setSelectTab(list) }}>
                                    <div className={`portfolio-tab-text${list?.id === selectTab?.id ? ' active-tab' : ''}`}>{list?.name}</div>
                                    {list?.id === selectTab?.id && <motion.div layoutId='theme' transition={{ duration: 0.1 }} className="active"></motion.div>}
                                </div>
                            )
                        })}
                    </div>
                </div> :
                    <div className="menu-card-tab-cntr">
                        <div className="menu-card-tab"><GTranslateIcon /></div>
                        <div className="menu-card-tab"><ColorLensIcon /></div>
                    </div>}
                {isExpand && <>
                    {selectTab?.name === 'Themes' && <ThemeToggler />}
                    {selectTab?.name === 'Languages' && <LanguageSelector />}
                </>
                }
            </button> */}
            <div className="portfolio-header theme" onClick={(e) => toggleTheme(e)}>
                <div className="portfolio-tabs">
                    <div className={`${theme} portfolio-tab`}>
                        {theme === 'light' ?   <NightsStayRoundedIcon />:<WbSunnyRoundedIcon />}
                    </div>
                </div>
            </div>

            {mobile && <button className={`menu-back ${openMenu ? 'active' : ''}`} onClick={() => openMenuClick()}><KeyboardBackspaceRoundedIcon /></button>}
        </>
    )
}
export default Header;