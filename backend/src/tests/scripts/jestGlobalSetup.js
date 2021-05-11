const User = require("../../services/User/userService");

require("../db");

const tokenSign = require("../../jwt");

module.exports = async () => {
  const email = "test@testmail.com";

  const user = User.findOne({ email });

  if (!user) {
    new User({
      email,
      token: tokenSign(email).token,
      addressInformation: {
        firstname: "Gabriel",
        lastname: "Müller",
        street: "Nasenstrasse11",
        postcode: "5000",
        locality: "Stadt",
        country: "Iania",
      },
      cardInformation: {
        fullname: "Gabriel Müller",
        validThru: "04/23",
        cardNr: "12345678912345678900",
        cvv: 234,
      },
    }).save();
  }
};
