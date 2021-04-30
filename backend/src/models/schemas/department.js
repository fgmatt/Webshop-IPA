// library
const mongoose = require("mongoose");

// schema
const productSchema = require("./product");

// schema definition
const departmentSchema = new mongoose.Schema(
  {
    department: { type: String, required: true },
    products: [productSchema],
  },

  { timestamps: true }
);

module.exports = departmentSchema;
