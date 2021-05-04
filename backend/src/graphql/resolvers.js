const {
  checkUserHasCardInformation,
  getDepartmentAndProducts,
  getUserAddressInformation,
  getUserToken,
  getProductWithSpecifications,
  setUserAddressInformation,
  setUserCardInformation,
  setUserWithToken,
} = require("../services");

const resolvers = {
  // retreiving data
  Query: {
    getDepartmentAndProducts: (parent, args) => {
      return getDepartmentAndProducts(args);
    },
    getProductWithSpecifications: (parent, args) => {
      return getProductWithSpecifications(args);
    },
    getUserAddressInformation: (parent, args) => {
      return getUserAddressInformation(args);
    },
    getUserToken: (parent, args) => {
      return getUserToken(args);
    },
    checkUserHasCardInformation: (parent, args) => {
      return checkUserHasCardInformation(args);
    },
  },

  //manipulating data
  Mutation: {
    setUserWithToken: (parent, args) => {
      return setUserWithToken(args);
    },
    setUserCardInformation: (parent, args) => {
      return setUserCardInformation(args);
    },
    setUserAddressInformation: (parent, args) => {
      return setUserAddressInformation(args);
    },
  },
};

module.exports = resolvers;
