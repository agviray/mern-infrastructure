const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Check for token being sent either in a header, or as a query param
  let token = req.get('Authorization') || req.query.token;
  // Default user to null
  req.user = null;
  if (!token) {
    return next();
  }
  // Remove 'Bearer' string that was included in token header.
  token = token.replace('Bearer', '');
  // Check if token is valid (not expired)
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    // If err exists, token invalid
    if (err) return next();
    // decoded is entire token payload
    req.user = decoded.user;
    // Gets token expiration, if necessary
    req.exp = new Date(decoded.exp * 1000);
    return next();
  });
};
