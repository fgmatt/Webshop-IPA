// library
const mongoose = require("mongoose");

// schemas
const departmentSchema = require("./schemas/department");
const userSchema = require("./schemas/user");

// models
const Department = mongoose.model("Department", departmentSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Department,
  User,
};
