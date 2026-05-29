import { proxyToRailway } from './_proxy.js';

export default async function handler(req, res) {
  return proxyToRailway(req, res, '/expenseCategories', { blockMods: true });
}
