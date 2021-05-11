const {
  checkUserHasCardInformation,
  getDepartmentWithProducts,
  getUserAddressInformation,
  getUserToken,
  getProductWithSpecifications,
  setProductData,
  setUserAddressInformation,
  setUserCardInformation,
  setUserWithToken,
} = require("../services");

const resolvers = {
  // retreiving data
  Query: {
    checkUserHasCardInformation: (parent, args) => {
      return checkUserHasCardInformation(args);
    },
    getDepartmentWithProducts: (parent, args) => {
      return getDepartmentWithProducts(args);
    },
    getUserAddressInformation: (parent, args) => {
      return getUserAddressInformation(args);
    },
    getUserToken: (parent, args) => {
      return getUserToken(args);
    },
    getProductWithSpecifications: (parent, args) => {
      return getProductWithSpecifications(args);
    },
  },

  //manipulating data
  Mutation: {
    setProductData: (parent, args) => {
      return setProductData(args);
    },
    setUserAddressInformation: (parent, args) => {
      return setUserAddressInformation(args);
    },
    setUserCardInformation: (parent, args) => {
      return setUserCardInformation(args);
    },
    setUserWithToken: (parent, args) => {
      return setUserWithToken(args);
    },
  },
};

module.exports = resolvers;
