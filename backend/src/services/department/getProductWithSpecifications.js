// library
const { ApolloError, UserInputError } = require("apollo-server-express");

// service
const Department = require("./departmentService");

// get product by his id and concerning department
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
  const Product = await searchedDepartment.products.find(
    (arrProduct) => arrProduct.productName === productName
  );

  return Product;
};

module.exports = getProductWithSpecifications;
