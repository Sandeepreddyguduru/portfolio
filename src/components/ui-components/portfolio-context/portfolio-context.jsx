import React, { createContext, useContext, useState } from "react";
import { connect } from "react-redux";

const AppContext = createContext();
export const PortfolioContext = () => useContext(AppContext);

const AppProvider = ({ children, language }) => {
    const [theme, setTheme] = useState(true);
    const [page, setPage] = useState('Home');


    return (
        <AppContext.Provider value={{
            theme, setTheme,
            page, setPage,
            language
        }}
        >
            {children}
        </AppContext.Provider>
    );
};

const mapStateToProps = (state) => {
    const { language } = state;
    return {
      language
    }
  }
  
  export default connect(mapStateToProps, {})(AppProvider);
