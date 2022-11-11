import db from '../../../libs/db';
import authorization from '../../../middlewares/authorization';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).end();
  
  const auth = await authorization(req, res);

  const { id } = req.query;
  const { title, bio, logo, hero } = req.body;

  const update = await db('profile')
                        .where({ id })
                        .update({
                          title,
                          bio,
                          logo,
                          hero
                        });

  // console.log(update);
  const updatedData = await db('profile').where({ id }).first();

  res.status(200);
  res.json({
    message: 'Success update data',
    data: updatedData
  });
}