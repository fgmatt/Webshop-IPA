// libraries
const { UserInputError, ApolloError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

// jwt secret
const { jwt_secret } = require("../../keys");

// service
const User = require("./userService");

/**
 * checking the user's token
 * @param {object} args
 * @returns {Promise<any>} true
 */
const checkUserHasValidToken = async ({ email }) => {
  // check if email exists
  if (!email) {
    throw new UserInputError("You must provide an email");
  }

  // finding user
  const user = await User.findOne({ email });

  if (!user) {
    throw new UserInputError("User not found");
  }

  // verifing token
  const verifyToken = jwt.verify(user.token, jwt_secret);

  if (!verifyToken) {
    throw new ApolloError("user has not a valid token");
  }

  return true;
};

module.exports = checkUserHasValidToken;
