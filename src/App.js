import React from 'react';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import ResetButton from './components/ResetButton';
import Timer from './components/Timer';
import AccountButton from './components/AccountButton';
import SocialMedia from './components/SocialMedia';
import BackgroundDropdown from './components/BackgroundDropdown';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="left">
          <Paragraph />
          <ResetButton />
          <Timer />
        </div>
        <div className="right">
          <AccountButton />
          <SocialMedia />
          <BackgroundDropdown />
        </div>
      </div>
    </div>
  );
}

export default App;
