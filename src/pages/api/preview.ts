import getConfig from 'next/config';
import fetch from 'node-fetch';

export default async (req, res) => {
  const { publicRuntimeConfig } = getConfig();

  if (req.query.secret !== 'MY_SECRET_TOKEN' || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const content = await fetch(`${publicRuntimeConfig.API_URL}/questions?filters=quiz_id[equals]${req.query.quiz_id}`, {
    headers: { 'X-API-KEY': publicRuntimeConfig.API_KEY }
  })
    .then(res => res.json())
    .catch(e => null);

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  // previewに入れるデータでミスってるなう
  res.setPreviewData({});
  res.end('Preview mode enabled');
};
