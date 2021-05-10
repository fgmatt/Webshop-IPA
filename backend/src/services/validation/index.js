// library
const { UserInputError } = require("apollo-server-express");

// max. 70 letters
const max70AndOnlyLetters = (str) => {
  // max. 70 digits
  const regexL = /^.{0,70}$/;

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

  return true;
};

// max. 70 digits without any special charakters
const max70AndNoSpecialCharacters = (str) => {
  // max. 70 digits
  const regexL = /^.{0,70}$/;

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

  return true;
};

// max. 10 digits, anly numbers and hyphen
const max10AndOnlyNumbersAndHyphen = (str) => {
  // max. 10 digits
  const regexL = /^.{0,10}$/;

  // no number
  const regexZ = /\D/;

  // hyphen
  const regexH = /-/;

  // matches string
  const vInputL = str.match(regexL);
  const vInputZ = str.match(regexZ);
  const vInputH = str.match(regexH);

  if (!vInputL) {
    throw new UserInputError("more than 10 characters are not allowed");
  }

  if ((vInputZ && !vInputH) || vInputZ) {
    throw new UserInputError("only hyphen and numbers are allowed");
  }

  return true;
};

module.exports = {
  max70AndOnlyLetters,
  max70AndNoSpecialCharacters,
  max10AndOnlyNumbersAndHyphen,
};
