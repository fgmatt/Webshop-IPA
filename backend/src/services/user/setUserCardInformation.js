// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

/**
 * set a user's card information
 * @param {object} args
 * @returns {Promise<any>} setted card information
 */
const setUserCardInformation = async ({
  email,
  fullname,
  validThru,
  cardNr,
  cvv,
}) => {
  // check if email exists
  if (!email || !fullname || !validThru || !cardNr || !cvv) {
    throw new UserInputError("You must provide an email");
  }

  let user = await User.findOne({ email });

  if (!user) {
    throw new UserInputError("User not found");
  }

  user.cardInformation = {
    email,
    fullname,
    validThru,
    cardNr,
    cvv,
  };

  await user.save();

  return "Card created";
};

module.exports = setUserCardInformation;
