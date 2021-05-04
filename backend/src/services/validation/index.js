// library
const { UserInputError } = require("apollo-server-express");

//
const max70AndOnlyLetters = (str) => {
  // max. 70 digits
  const regexL = /^.{70}$/;

  // alphabeth
  const regexA = /[^a-zA-Z]/;

  // matches string
  const vInputL = str.match(regexL);
  const vInputA = str.match(regexA);

  if (!vInputL) {
    throw new UserInputError("more than 70 characters are not allowed");
  }

  if (vInputA) {
    throw new UserInputError("It has a digit other than a letter");
  }
};

//
const max70AndNoSpecialCharacters = (str) => {
  // max. 70 digits
  const regexL = /^.{70}$/;

  // no letter or number
  const regexA = /\W | \D/;

  // matches string
  const vInputL = str.match(regexL);
  const vInputA = str.match(regexA);

  if (!vInputL) {
    throw new UserInputError("more than 70 characters are not allowed");
  }

  if (vInputA) {
    throw new UserInputError("It has a digit other than a letter");
  }
};

module.exports = { max70AndOnlyLetters, max70AndNoSpecialCharacters };
