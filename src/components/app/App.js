import React, { useState } from 'react';
import Header from '../header';
import Login from '../login';
import Footer from '../footer';
import { saveTokenInStorage } from "../../utils/api";
import './App.css';

function App() {

  const [ token, setToken ] = useState(localStorage.getItem('token') || '');

  const successLogin = (token) => {
    saveTokenInStorage(token);
    setToken(token);
  };

  return (
    <div className="App d-flex flex-column">
      <Header />
      <Login className='flex-grow-1' onSuccess={successLogin}/>
      <Footer />
    </div>
  );
}

export default App;
