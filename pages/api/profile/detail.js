import db from '../../../libs/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  
  const id  = 1;

  const link = await db('profile')
                      .where({ id })
                      .first();
  
  if(!link) return res.status(404).end();

  res.status(200);
  res.json({
    message: 'Success get data',
    data: link
  });
}