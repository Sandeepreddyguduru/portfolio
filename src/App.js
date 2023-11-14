import React from 'react';
import './App.scss';
import './components/ui-components/common-scss/__all.scss'
import Portfolio from './components/portfolio/portfolio';
import AppProvider from './components/ui-components/portfolio-context/portfolio-context';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Portfolio />
      </div>
    </AppProvider>
  );
}

export default App;
