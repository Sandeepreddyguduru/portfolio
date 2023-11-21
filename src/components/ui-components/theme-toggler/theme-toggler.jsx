import React, {useContext, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import { motion } from "framer-motion";
import { PortfolioContext } from "../portfolio-context/portfolio-context";
import { useDispatch } from "react-redux";
import { updateTheme } from "../../../store/actions/app-actions";

const ThemeToggler = () => {
    const { theme, setTheme } = PortfolioContext()
    const dispatch = useDispatch()
    // const [update, setUpdate] = useState(false);
    return (
        <>
            <motion.button
                layout
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => { setTheme(!theme); dispatch(updateTheme(theme ? 'dark' : 'light')) }}
                className="btn"
            >
                {theme ? 'light-theme' : 'dark-theme'}
            </motion.button>
            {/* <Snackbar message={'updated theme to ' + (theme ? 'dark' : 'light')} open={update} onClose={() => setUpdate(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={1000} /> */}
        </>
    )
}
export default ThemeToggler;