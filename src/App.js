import React from 'react';
import './styles/output.css';

import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div 
      id="App" 
      className="font-Lato" 
    >
      <Header />
      <Main />
      <Footer />    
    </div>
  );
};

export default App;
