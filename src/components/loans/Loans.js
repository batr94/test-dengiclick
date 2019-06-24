import React from 'react';

function Loans({ className }) {
  return (
    <section className={ `${className}` }>
      <div className='container'>
        <div className='row'>
          <div className='col text-left'>
            <h1>Список займов</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loans;