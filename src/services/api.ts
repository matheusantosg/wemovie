import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://wefit-movies.vercel.app/api/',
});


export const apiStock = axios.create({
  baseURL: 'http://localhost:3333',
});