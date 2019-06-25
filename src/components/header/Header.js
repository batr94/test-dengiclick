import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import icon_phone from '../../assets/images/icon-phone.png';
import './Header.css';

function Header({ token, removeToken,history }) {

  const logout = async () => {
    await removeToken();
    history.push('/');
  };

  return (
    <section>
      <header className='container'>
        <div className='row'>

          <div className='col-lg-4 col-md-4 text-left pl-0'>
            <img alt='' src={logo} />
          </div>

          <div className='col-xl-5 col-lg-6 col-md-6'>
            <div className='container'>
              <div className='row text-left feedback'>

                <div className='pr-3 d-none d-lg-block'>
                  <img alt='' src={icon_phone} />
                </div>

                <div className='col-5 p-0'>
                  <p className='phone'>+7 (707) 700 77 07</p>
                  <p className='working-hours'>9:00 — 21:00, без выходных.</p>
                </div>

                <div className='col-6 p-0'>
                  <span className='callback'>Заказать обратный звонок</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-1 p-0 align-self-center d-none d-xl-block'>
            <div className='container'>
              <div className='row justify-content-end languages'>
                <div className='p-0 flag' />
                <div className='p-0 flag kz' />
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-2 p-0 align-self-center text-right'>
            <button className="account dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Личный кабинет
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className='dropdown-item' to='/loans'>Список займов</Link>
              {!token &&
                <Link className='dropdown-item' to='/login'>Войти</Link>
              }
              {token &&
                <button className='dropdown-item' onClick={logout}>Выйти</button>
              }
            </div>
          </div>

        </div>
      </header>

    </section>
  );
}

export default withRouter(Header);