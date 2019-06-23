import axios from 'axios';

const URL_PATH = 'https://api.dengiclick.kz/api';

export async function authorization(login ,password) {
  const body = {
    username: login,
    password: password
  };
  return await axios.post(`${URL_PATH}/login`, body);
}

export function saveTokenInStorage(token) {
  sessionStorage.setItem('token', token);
}

export function removeTokenFromStorage() {
  sessionStorage.removeItem('token');
}
