// libraries
const { UserInputError } = require("apollo-server-express");

// service
const User = require("./userService");

// token
const tokenSign = require("../../jwt");

//
const setUserWithToken = async ({ email }) => {
  // check if email exists
  if (!email) {
    throw await new UserInputError("You must provide an email");
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

  return await "Token created";
};

module.exports = setUserWithToken;
