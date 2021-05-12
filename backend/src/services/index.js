// services
const checkUserHasCardInformation = require("./user/checkUserHasCardInformation");
const checkUserHasValidToken = require("./user/checkUserHasValidToken");
const getDepartmentWithProducts = require("./department/getDepartmentWithProducts");
const getProductWithSpecifications = require("./department/getProductWithSpecifications");
const getUserAddressInformation = require("./user/getUserAddressInformation");
const setProductData = require("./department/setProductData");
const setUserAddressInformation = require("./user/setUserAddressInformation");
const setUserCardInformation = require("./user/setUserCardInformation");
const setUserWithToken = require("./user/setUserWithToken");

module.exports = {
  checkUserHasCardInformation,
  checkUserHasValidToken,
  getDepartmentWithProducts,
  getProductWithSpecifications,
  getUserAddressInformation,
  setProductData,
  setUserAddressInformation,
  setUserCardInformation,
  setUserWithToken,
};
