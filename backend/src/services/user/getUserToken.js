// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

/**
 * Retrieving the user's token
 * @param {object} args
 * @returns {Promise<any>} user's token
 */
const getUserToken = async ({ email }) => {
  // check if email exists
  if (!email) {
    throw new UserInputError("You must provide an email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UserInputError("User not found");
  }

  return await user.token;
};

module.exports = getUserToken;
