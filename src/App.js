import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/output.css';


import Header from './components/Header/Header';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <div 
      id="App" 
      className="
        w-auto
        font-Lato
      " 
    >
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
