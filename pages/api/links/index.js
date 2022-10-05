import db from '../../../libs/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const links = await db('links').select('*');
  
  res.status(200);
  res.json({
    message: 'Success get data',
    data: links
  });
}