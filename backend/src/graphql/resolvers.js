const resolvers = {
  // retreiving data
  Query: {
    getDepartmentAndProducts: (parent, args) => {
      return;
    },
    getProductWithSpecifications: (parent, args) => {
      return;
    },
    getUserAddressInformation: (parent, args) => {
      return;
    },
    getUserToken: (parent, args) => {
      return;
    },
    checkUserHasCardInformation: (parent, args) => {
      return;
    },
  },

  //manipulating data
  Mutation: {
    setUserWithToken: (parent, args) => {
      return;
    },
    setUserCardInformation: (parent, args) => {
      return;
    },
    setUserAddressInformation: (parent, args) => {
      return;
    },
  },
};

module.exports = resolvers;
