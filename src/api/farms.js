import http from './http.js';

export function getFarms() {
  return http.get('/farms');
}

export function createFarm(name) {
  return http.post('/farms', { name });
}

export function getFarmDetail(farmId) {
  return http.get(`/farms/${farmId}`);
}

export function joinFarm(farmId) {
  return http.post(`/farms/${farmId}`);
}

export function leaveFarm(farmId) {
  return http.delete(`/farms/${farmId}`);
}
