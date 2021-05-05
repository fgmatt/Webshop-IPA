// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

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
  // check if email exists
  if (
    !email ||
    !firstname ||
    !lastname ||
    !street ||
    !postcode ||
    !locality ||
    !country
  ) {
    throw await new UserInputError("You must provide an email");
  }

  let user = await User.findOne({ email });

  if (!user) {
    throw await new UserInputError("User not found");
  }

  user.addressInformation = {
    email,
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
