import React, { useContext, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import { motion } from "framer-motion";
import { PortfolioContext } from "../portfolio-context/portfolio-context";
import { useDispatch } from "react-redux";
import { updateTheme } from "../../../store/actions/app-actions";
import './theme-toggle.scss';

const ThemeToggler = () => {
    const { theme, setTheme } = PortfolioContext()
    const dispatch = useDispatch()
    const [themeActive, setThemeActive] = useState(false);
    // const [update, setUpdate] = useState(false);
    const varient = {
        initial: {
            width: 98,
            height: 48,
            borderRadius: '50%',
        },
        animation: {
            width: 100,
            height: 200,
            borderRadius: 24,
        },
        exit: {
            width: 98,
            height: 48,
            borderRadius: '50%',
        }
    }
    return (
        <motion.div
            className="portfolio-tabs header-btn theme-menu"
        // variants={varient}
        // initial="initial"
        // animate="animation"
        // exit="exit"
        >
            <motion.button
                layout
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                // onClick={() => { setTheme(!theme); dispatch(updateTheme(theme ? 'dark' : 'light')) }}
                onClick={() => { setThemeActive(!themeActive); dispatch(updateTheme(theme)) }}
                className="portfolio-tab theme-btn"
            >
                Themes
            </motion.button>
            {/* <button onClick={() => { dispatch(getProd()) }}>get product</button> */}
            {/* <Snackbar message={'updated theme to ' + (theme ? 'dark' : 'light')} open={update} onClose={() => setUpdate(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={1000} /> */}
        </motion.div>
    )
}
export default ThemeToggler;