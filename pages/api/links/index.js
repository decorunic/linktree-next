import db from '../../../libs/db';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const { authorization } = req.headers;

  if (!authorization) return res.status(401).end();
  
  const authSplit = authorization.split(' ');
  console.log(authSplit);
  const [authType, token] = [
    authSplit[0],
    authSplit[1]
  ];

  if (authType !== 'Bearer') return res.status(401).end();
  
  try {
    const verifyToken = jwt.verify(token, 'secret');

    const links = await db('links').select('*');
    
    res.status(200);
    res.json({
      message: 'Success get data',
      data: links
    });
  } catch (error) {
    res.status(401).end();
  }
}