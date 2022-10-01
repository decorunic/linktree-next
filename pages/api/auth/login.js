import db from '../../../libs/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;

  const checkUser = await db('users')
                          .where({ email })
                          .first();

  if (!checkUser) {
    return res.status(401).json({
      message: 'Email not registered'
    });
  }

  const checkPassword = await bcrypt.compare(password, checkUser.password);
  if (!checkPassword) {
    return res.status(401).json({
      message: 'Password is wrong'
    });
  }

  res.status(200);
  res.json({
    message: 'Success Login',
    data: checkUser
  });
}