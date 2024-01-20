import React, { createContext, useContext, useEffect, useState } from "react";
import { connect } from "react-redux";

const AppContext = createContext();
export const PortfolioContext = () => useContext(AppContext);

const AppProvider = ({ children, language, appTheme, appPage, assistanceVoice, products }) => {
    const [theme, setTheme] = useState(appTheme);
    const [page, setPage] = useState(appPage);
    const [transcript, setTranscript] = useState('')
    const [response, setResponse] = useState('')

    const headerLists = [
        { id: 1, name: 'Home' }, { id: 2, name: 'About' }, { id: 3, name: 'Lab' }
    ]
    const supportedLanguages = ['English', 'Telugu', 'Hindi', 'Tamil']


    return (
        <AppContext.Provider value={{
            theme, setTheme,
            page, setPage,
            transcript, setTranscript,
            response, setResponse,
            language,
            appTheme,
            headerLists,
            appPage,
            assistanceVoice,
            products,
            supportedLanguages
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
