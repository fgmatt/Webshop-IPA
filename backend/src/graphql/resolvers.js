const {
  checkUserHasCardInformation,
  checkUserHasValidToken,
  getDepartmentWithProducts,
  getProductWithSpecifications,
  getUserAddressInformation,
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
    checkUserHasValidToken: (parent, args) => {
      return checkUserHasValidToken(args);
    },
    getDepartmentWithProducts: (parent, args) => {
      return getDepartmentWithProducts(args);
    },
    getProductWithSpecifications: (parent, args) => {
      return getProductWithSpecifications(args);
    },
    getUserAddressInformation: (parent, args) => {
      return getUserAddressInformation(args);
    },
  },

  // manipulating data
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
