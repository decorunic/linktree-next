import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const auth = await authorization(req, res);
  
  const { name, url, type, icon } = req.body;
  const create = await db('links')
                        .insert({
                          name,
                          url,
                          type,
                          icon
                        });

  const createData = await db('links')
                            .where({ id: create })
                            .first();

  res.status(200);
  res.json({
    message: 'Success create data',
    data: createData
  });
}