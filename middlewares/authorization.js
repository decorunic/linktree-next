import jwt from 'jsonwebtoken';

export default function authorization(req, res) {
  return new Promise((resolve, reject) => {

    const { authorization } = req.headers;

    if (!authorization) return res.status(401).end();
    
    const authSplit = authorization.split(' ');
    const [authType, token] = [
      authSplit[0],
      authSplit[1]
    ];

    if (authType !== 'Bearer') return res.status(401).end();
    
    return jwt.verify(token, "secret", (err, decoded) => {
    // return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).end();
      return resolve(decoded);
    });
  });
}