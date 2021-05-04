// library
const jwt = require("jsonwebtoken");

// jwt_secret
const { jwt_secret } = require("../jwt");

// timestamp of creation of the token
const timestamp = Math.floor(new Date().getTime() / 1000);

// date when token expires -> 24h after creation
const expires = Math.floor(Date.now() / 1000) + 60 * 60 * 24;

/**
 * Create a JWT for signup or signin
 * @param {object} user the user the JWT is for
 * @returns {{token: *, expires: *}} JWT
 */
const tokenSign = (email) => {
  // values encypted in jwt
  const payload = {
    ub: email,
    iat: timestamp,
    exp: expires,
  };

  // jwt token
  const token = jwt.sign(payload, jwt_secret);

  return { token, expires };
};

module.exports = tokenSign;
