import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.encurtador.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});
