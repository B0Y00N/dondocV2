import http from './http.js';

export function login(userId, userPassword) {
  return http.post('/auth/login', { userId, userPassword });
}

export function signup(userId, userPassword, name) {
  return http.post('/auth/signup', { userId, userPassword, name });
}

export function getMe() {
  return http.get('/users/me');
}

export function updateMe(data) {
  return http.patch('/users/me', data);
}
