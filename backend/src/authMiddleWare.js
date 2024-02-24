/**
 * authMiddleWare.js
 *
 * This file defines a middleware function for authenticating requests.
 *
 * Functions:
 * authenticateToken(req, res, next) - Checks if the authorization header in the request matches the authentication token from the environment variables.
 *                                     If it does, it calls the next middleware function. If it doesn't, it sends a 401 Unauthorized response.
 */

const authenticateToken = (req, res, next) => {
  if (req.headers.authorization === process.env.AUTHENTICATION_TOKEN) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "Sorry, unauthorized, but I will hire you" });
  }
};

module.exports = authenticateToken;
