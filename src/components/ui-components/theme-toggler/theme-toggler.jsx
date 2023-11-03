import React, { useContext, useState } from "react";
import { portfolioContext } from "../../portfolio/portfolio";
import Snackbar from '@mui/material/Snackbar';
import { motion } from "framer-motion";

const ThemeToggler = () => {
    const [theme, setTheme] = useContext(portfolioContext);
    const [update, setUpdate] = useState(false);
    return (
        <>
            <motion.button
                layout
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => { setTheme(!theme); setUpdate(true) }}
                className="btn"
            >
                {theme ? 'dark-theme' : 'light-theme'}
            </motion.button>
            {/* <Snackbar message={'updated theme to ' + (theme ? 'dark' : 'light')} open={update} onClose={() => setUpdate(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={1000} /> */}
        </>
    )
}
export default ThemeToggler;