import React from 'react';
import './App.css';
import Constants from './constants/Constants';
import StyleConstants from './constants/StyleConstants';

const App = () => {
  return (
    <div className={StyleConstants.APP}>
      <header className={StyleConstants.APP_HEADER}>
        {Constants.APP_TITLE}
      </header>
    </div>
  );
}

export default App; 