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

    const listThemes = ['light', 'dark', 'system'];
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
    const selectTheme = (e, theme) => {
        e?.stopPropagation();
        setTheme(theme);
        dispatch(updateTheme(theme))
    }
    return (
        <div className="menu-section">
            {listThemes?.map((appTheme, i) => {
                return (
                    // <motion.div
                    //     layout
                    //     whileHover={{ scale: 1 }}
                    //     whileTap={{ scale: 0.9 }}
                    //     transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    //     onClick={(e) => {e?.stopPropagation(); setTheme(!theme); dispatch(updateTheme(theme)) }}
                    //     // onClick={() => { setThemeActive(!themeActive); dispatch(updateTheme(theme)) }}
                    //     className="menu-option"
                    // >
                    //     {theme}
                    // </motion.div>
                    <div key={i}
                        className={`menu-option${appTheme === theme ? ' active' : ''}`}
                        onClick={(e) => { selectTheme(e, appTheme) }}>
                        {appTheme}
                    </div>
                )
            })}
            {/* <button onClick={() => { dispatch(getProd()) }}>get product</button> */}
            {/* <Snackbar message={'updated theme to ' + (theme ? 'dark' : 'light')} open={update} onClose={() => setUpdate(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={1000} /> */}
        </div>
    )
}
export default ThemeToggler;