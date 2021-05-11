// services
const checkUserHasCardInformation = require("./user/checkUserHasCardInformation");
const getDepartmentWithProducts = require("./department/getDepartmentWithProducts");
const getUserAddressInformation = require("./user/getUserAddressInformation");
const getUserToken = require("./user/getUserToken");
const getProductWithSpecifications = require("./department/getProductWithSpecifications");
const setProductData = require("./department/setProductData");
const setUserAddressInformation = require("./user/setUserAddressInformation");
const setUserCardInformation = require("./user/setUserCardInformation");
const setUserWithToken = require("./user/setUserWithToken");

module.exports = {
  checkUserHasCardInformation,
  getDepartmentWithProducts,
  getUserAddressInformation,
  getUserToken,
  getProductWithSpecifications,
  setProductData,
  setUserAddressInformation,
  setUserCardInformation,
  setUserWithToken,
};
