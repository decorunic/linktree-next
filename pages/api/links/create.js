import db from '../../../libs/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { name, url, type, icon } = req.body;
  const create = await db('links').insert({
    name,
    url,
    type,
    icon
  });

  const createData = await db('links').where({ id: create }).first();

  res.status(200);
  res.json({
    message: 'Success create data',
    data: createData
  });
}