import { proxyToRailway } from '../_proxy.js';

export default async function handler(req, res) {
  const { id } = req.query;
  return proxyToRailway(req, res, `/records/${id}`, { blockMods: true });
}
