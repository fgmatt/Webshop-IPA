// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

//
const getUserToken = async ({ email }) => {
  // check if email exists
  if (!email) {
    throw await new UserInputError("You must provide an email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw await new UserInputError("User not found");
  }

  return await user.token;
};

module.exports = getUserToken;
