// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

// validation
const { max70AndOnlyLetters } = require("../validation");

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
    throw new UserInputError("You must provide all required values");
  }

  // has cardNr length if 20
  if (!cardNr.lenght === 20) {
    throw new UserInputError("cardNr must have 20 digits");
  }

  // has cvv length of 4
  if (!cvv.toString().lenght === 4) {
    throw new UserInputError("cvv must have 4 digits");
  }

  max70AndOnlyLetters(fullname);

  let user = await User.findOne({ email });

  if (!user) {
    throw new UserInputError("User not found");
  }

  user.cardInformation = {
    fullname,
    validThru,
    cardNr,
    cvv,
  };

  await user.save();

  return "Card created";
};

module.exports = setUserCardInformation;
