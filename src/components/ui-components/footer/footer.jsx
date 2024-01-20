import React from "react";
import './footer.scss';
import Trans from "../translator/trans";

const Footer = () => {
    return (
        <footer className="footer w-100 text-center p-4">
            <div className="footer-copy-right"><Trans Translate={'footer.rights'}></Trans></div>
            <a href="mailto:Webdev.sandeep.g@gmail.com" className="owner-email"><Trans Translate={'about.my.fullName'}></Trans></a>
        </footer>
    )
}
export default Footer;