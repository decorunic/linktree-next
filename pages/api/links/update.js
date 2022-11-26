import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).end();
  
  const auth = await authorization(req, res);

  const { id } = req.query;
  const { name, url, type, icon, new_tab } = req.body;

  const update = await db('links')
                        .where({ id })
                        .update({
                          name,
                          url,
                          type,
                          icon, 
                          new_tab
                        });

  const updatedData = await db('links').where({ id }).first();

  res.status(200);
  res.json({
    message: 'Success update data',
    data: updatedData
  });
}