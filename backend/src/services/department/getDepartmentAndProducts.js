// libraries
const { ApolloError, UserInputError } = require("apollo-server-express");

// service
const Department = require("./departmentService");

// get department with products from database
const getDepartmentWithProducts = async ({ department }) => {
  // check if department exists
  if (!department) {
    throw new UserInputError("You must provide a department");
  }

  // search department
  const searchedDepartment = await Department.findOne({ department });

  // department not found
  if (!searchedDepartment) {
    throw new ApolloError("Department do not exists");
  }

  return searchedDepartment;
};

module.exports = getDepartmentWithProducts;
