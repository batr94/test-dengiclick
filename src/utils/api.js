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

export async function getLoans() {
  const headers = {
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  };
  return await axios.get(`${URL_PATH}/loans`, { headers: headers });
}

export async function getLoan(loanId) {
  const headers = {
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  };
  return await axios.get(`${URL_PATH}/loan/${loanId}/detail`, { headers: headers });
}
