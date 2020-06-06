import axios from 'axios';

export const getPrice = () => {
  return axios.request({ method: 'GET', url: 'https://economia.awesomeapi.com.br/json/all' });
}