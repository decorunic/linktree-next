import db from '../../../libs/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hashSync(password, salt);

  const user = await db('users').where({ email }).first();

  if (user) {
    return res.status(409).json({
      message: 'Email already registered'
    });
  }

  const register = await db('users').insert({
    email,
    password: passwordHash
  });

  const registerUser = await db('users')
                              .where({ id: register })
                              .first();

  res.status(200);
  res.json({
    message: 'Success create user',
    data: registerUser
  });
}