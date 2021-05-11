// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

// validation
const {
  max70AndOnlyLetters,
  max70AndNoSpecialCharacters,
  max10AndOnlyNumbersAndHyphen,
} = require("../validation");

/**
 * set a given user address information
 * @param {object} args
 * @returns {Promise<any>} the setted address information
 */
const setUserAddressInformation = async ({
  email,
  firstname,
  lastname,
  street,
  postcode,
  locality,
  country,
}) => {
  // check if required values exists
  if (
    !email ||
    !firstname ||
    !lastname ||
    !street ||
    !postcode ||
    !locality ||
    !country
  ) {
    throw new UserInputError("You must provide all values");
  }

  max70AndOnlyLetters(firstname);
  max70AndOnlyLetters(lastname);
  max70AndOnlyLetters(locality);
  max70AndOnlyLetters(country);

  max70AndNoSpecialCharacters(street);

  max10AndOnlyNumbersAndHyphen(postcode);

  let user = await User.findOne({ email });

  if (!user) {
    throw new UserInputError("User not found");
  }

  user.addressInformation = {
    firstname,
    lastname,
    street,
    postcode,
    locality,
    country,
  };

  await user.save();

  return await user.addressInformation;
};

module.exports = setUserAddressInformation;
