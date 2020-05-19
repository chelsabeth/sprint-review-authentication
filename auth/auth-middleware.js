// code in here to make the check that a user has a token before giving them access to the cat facts

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secret.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        // if token is not valid
        res.status(401).json({ message: "sorry, no access" })
      } else {
        req.user = decodedToken.user;
        next();
      }
    })
  } else {
    res.status(401).json({ you: 'shall not pass!' });
  }
};