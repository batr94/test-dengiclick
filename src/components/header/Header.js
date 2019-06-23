import React from 'react';
import logo from '../../assets/images/logo.png';
import icon_phone from '../../assets/images/icon-phone.png';
import './Header.css';

function Header() {
  return (
    <section>
      <header className='container'>
        <div className='row'>

          <div className='col-4 text-left pl-0'>
            <img alt='' src={logo} />
          </div>

          <div className='col-5'>
            <div className='container'>
              <div className='row text-left feedback'>

                <div className='pr-3'>
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

          <div className='col-1 p-0 align-self-center'>
            <div className='container'>
              <div className='row justify-content-end languages'>
                <div className='p-0 flag' />
                <div className='p-0 flag kz' />
              </div>
            </div>
          </div>
          <div className='col-2 p-0 align-self-center text-right'>
            <a href='#account' className="account">Личный кабинет</a>
          </div>

        </div>
      </header>

    </section>
  );
}

export default Header;