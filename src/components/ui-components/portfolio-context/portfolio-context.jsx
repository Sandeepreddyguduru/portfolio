import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const PortfolioContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);
    const [page, setPage] = useState('Home');


    return (
        <AppContext.Provider value={{
            theme, setTheme,
            page, setPage
        }}
        >
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;
