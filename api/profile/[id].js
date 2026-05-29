import { isValidToken, proxyToRailway } from '../_proxy.js';

export default async function handler(req, res) {
  const { id } = req.query;

  if (!isValidToken(req)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  return proxyToRailway(req, res, `/profile/${id}`);
}
