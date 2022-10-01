import db from '../../../libs/db';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).end();

  const { id } = req.query;

  const deleted = await db('links').where({ id }).del();

  res.status(200);
  res.json({
    message: 'Success delete data',
  });
}