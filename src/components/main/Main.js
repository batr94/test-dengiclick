import React from 'react';

function Main({ className }) {
  return (
    <section className={ `${className}` }>
      <div className='container'>
        <div className='row'>
          <div className='col text-left'>
            <h1>Главная страница</h1>
            <p>Войдите в личный кабинет чтобы посмотреть список своих займов</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;