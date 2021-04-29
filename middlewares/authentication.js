// authetication.js
const { response } = require('express');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  jwt.verify(authorization, process.env.JWT_SECRETKEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    console.log(decoded);
    next();
  });
};

module.exports = authenticate;