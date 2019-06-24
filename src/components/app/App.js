import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../header';
import Login from '../login';
import Main from '../main';
import Loans from '../loans';
import Footer from '../footer';
import { saveTokenInStorage, removeTokenFromStorage } from "../../utils/api";
import './App.css';

function App({ history }) {

  const [ stateToken, setToken ] = useState(sessionStorage.getItem('token'));

  const successLogin = async (token) => {
    saveTokenInStorage(token);
    await setToken(token);
    history.push('/loans');
  };

  const removeToken = useCallback(() => {
    removeTokenFromStorage();
    setToken('');
  }, []);

  return (
    <div className="App d-flex flex-column">
      <Header removeToken={removeToken} />
      <main className='flex-grow-1'>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/login' render={() =>
            stateToken
              ? <Redirect to='/' />
              : <Login onSuccess={successLogin} />} />
          <Route path='/loans' render={() =>
            stateToken
              ? <Loans removeToken={ removeToken }/>
              : <Redirect to='/login' />
          } />
        </Switch>
      </main>
      <Footer />
    </div>);
}

export default withRouter(App);
