// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

// token
const tokenSign = require("../../jwt");

/**
 * set a given user a JWT token
 * @param {object} args
 * @returns {any} confirming string
 */
const setUserWithToken = async ({ email }) => {
  // check if email exists
  if (!email) {
    throw new UserInputError("You must provide an email");
  }

  let user = await User.findOne({ email });

  if (user) {
    user.token = await tokenSign(email).token;
  } else {
    user = await new User({
      email,
      token: tokenSign(email).token,
    });
  }

  await user.save();

  return "Token created";
};

module.exports = setUserWithToken;
