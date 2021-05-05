// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

/**
 * The address information of the user
 * @param {object} args
 * @returns {Promise<any>} returns the user address information
 */
const getUserAddressInformation = async ({ email }) => {
  // check if email exists
  if (!email) {
    throw await new UserInputError("You must provide an email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw await new UserInputError("User not found");
  }

  return await user.addressInformation;
};

module.exports = getUserAddressInformation;
