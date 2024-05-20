import React, { createContext, useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from "react-i18next";

const AppContext = createContext();
export const PortfolioContext = () => useContext(AppContext);;

const AppProvider = ({ children, language, appTheme, appPage, assistanceVoice, products }) => {
    const [theme, setTheme] = useState(appTheme);
    const [page, setPage] = useState(appPage);
    const [active, setActive] = useState(1);
    const [transcript, setTranscript] = useState('')
    const [response, setResponse] = useState('');
    const [isEnglish, setIsExpand] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const [contactTab, setContactTab] = useState(true);
    const [mobile, setMobile] = useState(window.innerWidth <= 700);

    const { t } = useTranslation();

    const headerLists = [
        { id: 1, name: 'home', icon: <HomeRoundedIcon /> }, { id: 2, name: 'about', icon: <AssignmentIndRoundedIcon /> }, { id: 3, name: 'contact', icon: <EmailIcon /> },
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

    useEffect(() => {
        let pageScroll = document.querySelector('.App');
        if (pageScroll) {
            pageScroll?.scrollTo(0, 0);
        }
    }, [page])

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
        setMobile(window.innerWidth <= 600);
        if (window.innerWidth >= 600) {
            setOpenMenu( false );
            closeMenu();
        }
    }


    // common functions
    const navigateTo = (path) => {
        switch (path) {
            case 'home':
                setPage('home');
                setActive(1);
                break;
            case 'about':
                setPage('about');
                setActive(2);
                break;
            case 'contact':
                setPage('contact');
                setActive(3);
                break;
            default:
                break;
        }
    }

    const openAccount = (account) => {
        const social = t('footer.contactDetails.social', { returnObjects: true });
        const link = social?.find((name) => name?.type === account?.type)?.link;
        if (link) {
            window?.open(link, '_blank');
        }
        // })
        // switch (key) {
        //     case 'linkedin':
        //         window?.open(account?.link, '_blank');
        //         break;
        //     case 'gitHub':
        //         window?.open(account?.link, '_blank');
        //         break;
        //     case 'naukri':
        //         window?.open(account?.link, '_blank');
        //         break;
        //     case 'email':
        //         window?.open(account?.link, '_blank');
        //         break;
        //     default:
        //         break;
        // }
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
            contactTab, setContactTab,
            openMenuClick,
            navigateTo,
            openAccount,
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
