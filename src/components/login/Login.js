import React, { useState } from 'react';
import './Login.css';
import {useInput} from "../../hooks/input";
import { authorization } from '../../utils/api';

function Login({ onSuccess }) {

  const { value: login, bind: bindLogin } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ inProcess, setInProcess ] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setInProcess(true);
      const result = await authorization(login, password);
      setErrorMessage('');
      onSuccess(result.data.data.token);
    } catch (error) {
      error.response
        ? setErrorMessage(error.response.data.error.message)
        : setErrorMessage(error.message);
    } finally {
      setInProcess(false);
    }

  };

  return (
    <div className='container login'>
      <div className='row justify-content-center'>
        <div className='col-4 text-left'>
          <h1 className='title'>Вход в личный кабинет</h1>
          {errorMessage &&
          <div className='alert alert-danger'>
            { errorMessage }
          </div>
          }
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Введите телефон или e-mail'
                name='login'
                { ...bindLogin }
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Введите пароль'
                name='password'
                { ...bindPassword }
              />
            </div>
            { inProcess &&
              <button type='button' className='btn btn-green'>
                <div className="spinner-border spinner-border-sm text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </button>
            }
            { !inProcess &&
              <button type='submit' className='btn btn-green'>
                Вход
              </button>
            }

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;