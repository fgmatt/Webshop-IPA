// libraries
const { UserInputError, ApolloError } = require("apollo-server-express");

// service
const User = require("./userService");

/**
 * Check if user has credit card information
 * @param {object} args
 * @returns {Promise<boolean>} true if has Card Information
 */
const checkUserHasCardInformation = async ({ email }) => {
  // check if email exists
  if (!email) {
    throw new UserInputError("You must provide an email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UserInputError("User not found");
  }

  if (!user.cardInformation) {
    throw new ApolloError("User has not card information");
  }

  return true;
};

module.exports = checkUserHasCardInformation;
