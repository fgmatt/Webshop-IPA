const checkUserHasCardInformation = require("./user/checkUserHasCardInformation");
const getDepartmentAndProducts = require("./department/getDepartmentAndProducts");
const getUserAddressInformation = require("./user/getUserAddressInformation");
const getUserToken = require("./user/getUserToken");
const getProductWithSpecifications = require("./department/getProductWithSpecifications");
const setUserAddressInformation = require("./user/setUserAddressInformation");
const setUserCardInformation = require("./user/setUserCardInformation");
const setUserWithToken = require("./user/setUserWithToken");

module.exports = {
  checkUserHasCardInformation,
  getDepartmentAndProducts,
  getUserAddressInformation,
  getUserToken,
  getProductWithSpecifications,
  setUserAddressInformation,
  setUserCardInformation,
  setUserWithToken,
};
