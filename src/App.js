import React from 'react';
import './App.css';
import Constants from './constants/Constants';
import StyleConstants from './constants/StyleConstants';
import Game from './component/Game';

const App = () => {
  return (
    <div className={StyleConstants.APP}>
      <header className={StyleConstants.APP_HEADER}>
        {Constants.APP_TITLE}
      </header>
      <Game/>
    </div>
  );
}

export default App; 