// libraries
const { UserInputError, ApolloError } = require("apollo-server-express");

// service
const User = require("./userService");

//
const getUserAddressInformation = async ({ email }) => {
  // check if email exists
  if (!email) {
    throw await new UserInputError("You must provide an email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw await new UserInputError("User not found");
  }

  if (!user.cardInformation) {
    throw await new ApolloError("User has not card information");
  }

  return await true;
};

module.exports = getUserAddressInformation;
