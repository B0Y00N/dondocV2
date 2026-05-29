import axios from 'axios';

let _userId = null;

export function setUserId(id) {
  _userId = id != null ? String(id) : null;
}

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

http.interceptors.request.use((config) => {
  if (_userId) {
    config.headers['userId'] = _userId;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default http;
