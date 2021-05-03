const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../jwt");

const timestamp = Math.floor(new Date().getTime() / 1000);
const expires = Math.floor(Date.now() / 1000) + 60 * 60 * 24;

/**
 * Create a JWT for signup or signin
 * @param {object} user the user the JWT is for
 * @returns {{token: *, expires: *}} JWT
 */
const tokenSign = (email) => {
  const payload = {
    ub: email,
    iat: timestamp,
    exp: expires,
  };

  const token = jwt.sign(payload, jwt_secret);

  return { token, expires };
};

module.exports = tokenSign;
