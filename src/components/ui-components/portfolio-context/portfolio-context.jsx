import React, { createContext, useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailIcon from '@mui/icons-material/Email';

const AppContext = createContext();
export const PortfolioContext = () => useContext(AppContext);

const AppProvider = ({ children, language, appTheme, appPage, assistanceVoice, products }) => {
    const [theme, setTheme] = useState(appTheme);
    const [page, setPage] = useState(appPage);
    const [active, setActive] = useState(1);
    const [transcript, setTranscript] = useState('')
    const [response, setResponse] = useState('');
    const [isEnglish, setIsExpand] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const [mobile, setMobile] = useState(window.innerWidth <= 700);

    const headerLists = [
        { id: 1, name: 'Home', icon: <HomeRoundedIcon /> }, { id: 2, name: 'About', icon: <AssignmentIndRoundedIcon /> }, { id: 3, name: 'Contact', icon: <EmailIcon /> },
    ];
    const animateOnce = true
    const appLanguages = [{ type: 'en', name: 'english' }, { type: 'hin', name: 'hindi' }, { type: 'tel', name: 'telugu' }]
    
    useEffect(() => {
        closeMenu();
            
        isMobileResolution();
        window.addEventListener('resize', isMobileResolution);
        return () => {
            window.removeEventListener('resize', isMobileResolution);
          };
    }, []);

    useEffect(() => {
        setIsExpand(language === 'en' ? true : false)
    }, [language])

    const openMenuClick = () => {
        setOpenMenu(!openMenu);
        // let content = document.getElementById('portfolio-content-id')
        setTimeout(() => {
            closeMenu()
        }, 550);
    }

    const closeMenu = () => {
        let content = document.getElementById('portfolio-content-id')
        if (content) {
            content?.classList?.remove('menu-closed')
        };
    }

    const isMobileResolution = () => {
        setMobile(window.innerWidth <= 700);
        if (window.innerWidth >= 700) {
            setOpenMenu( false );
            closeMenu();
        }
    }

    return (
        <AppContext.Provider value={{
            theme, setTheme,
            page, setPage,
            transcript, setTranscript,
            response, setResponse,
            openMenu, setOpenMenu,
            openContact, setOpenContact,
            active, setActive,
            openMenuClick,
            language,
            animateOnce,
            appTheme,
            headerLists,
            appPage,
            assistanceVoice,
            products,
            appLanguages,
            isEnglish,
            mobile
        }}
        >
            {children}
        </AppContext.Provider>
    );
};

const mapStateToProps = (state) => {
    const { language, appTheme, appPage, assistanceVoice, prod } = state;
    return {
        language, appTheme, appPage, assistanceVoice, products: prod
    }
  }
  
  export default connect(mapStateToProps, {})(AppProvider);
