import React, { useState } from "react";
import './footer.scss';
import Trans from "../translator/trans";
import { SwipeableDrawer } from "@mui/material";
import { PortfolioContext } from "../portfolio-context/portfolio-context";
import Contact from "../contact/contact";

const Footer = () => {
    const { mobile } = PortfolioContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (e) => {
        e.stopPropagation();
        console.log(e);
        setIsOpen(true);
    }

    return (
        <footer className="footer w-100 text-center p-4">
            <div className="footer-copy-right"><Trans Translate={'footer.rights'}></Trans></div>
            <div onClick={() => setIsOpen(true)} className="owner-email"><Trans Translate={'about.my.fullName'}></Trans></div>
            <SwipeableDrawer
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => handleOpen()}
                anchor="bottom"
                className={`footer-drawer ${isOpen ? 'opening' : 'closing'}`}
                transitionDuration={{ enter: 1000, exit: 500 }}
                disableSwipeToOpen={true}
                sx={{
                    height: '100%',
                    '& .MuiDrawer-paper': {
                        height: mobile ? '100%' : '80%',
                    }
                }}
            >
                <Contact fromFooter={true}/>
            </SwipeableDrawer>
        </footer>
    )
}
export default Footer;