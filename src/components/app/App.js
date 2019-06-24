import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../header';
import Login from '../login';
import Main from '../main';
import Loans from '../loans';
import Footer from '../footer';
import { saveTokenInStorage } from "../../utils/api";
import './App.css';

function App({ history }) {

  const [ stateToken, setToken ] = useState(sessionStorage.getItem('token'));

  const successLogin = async (token) => {
    saveTokenInStorage(token);
    await setToken(token);
    history.push('/loans');
  };

  return (
      <div className="App d-flex flex-column">
        <Header />
        <main className='flex-grow-1'>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/login' render={() =>
              stateToken
                ? <Redirect to='/' />
                : <Login onSuccess={successLogin} />} />
            <Route path='/loans' render={() =>
              stateToken
                ? <Loans/>
                : <Redirect to='/login' />
            } />
          </Switch>
        </main>
        <Footer />
      </div>  );
}

export default withRouter(App);
