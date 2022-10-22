import db from '../../../libs/db';
import { authorizationPage } from '../../../middlewares/authorizationPage';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  
  const auth = await authorizationPage(req, res);
  
  const { id } = req.query;

  const link = await db('links')
                      .where({ id })
                      .first();
  
if(!post) return res.status(404).end();

  res.status(200);
  res.json({
    message: 'Success get data',
    data: link
  });
}