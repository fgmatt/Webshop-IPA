// library
const { ApolloError, UserInputError } = require("apollo-server-express");

// service
const Department = require("./departmentService");

/**
 * get product by his productName and concerning department
 * @param {object{department<string>, productName<string>}} args
 * @returns {Promise<any>} product with specifications
 */
const getProductWithSpecifications = async ({ productName, department }) => {
  // check if department is provided
  if (!department) {
    throw new UserInputError("You must provide a department");
  }

  // check if id is provided
  if (!productName) {
    throw new UserInputError("You must provide a productName");
  }

  // search concernig department
  const searchedDepartment = await Department.findOne({ department });

  // department dosen't exist
  if (!searchedDepartment) {
    throw new ApolloError("Department do not exists");
  }

  // find product in department by id
  const product = await searchedDepartment.products.find(
    (arrProduct) => arrProduct.productName === productName
  );

  // product does not exists
  if (!product) {
    throw new ApolloError("Product does not exist");
  }

  return product;
};

module.exports = getProductWithSpecifications;
