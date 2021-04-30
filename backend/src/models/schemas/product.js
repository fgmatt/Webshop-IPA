// library
const mongoose = require("mongoose");

// schema
const specificationSchema = require("./specification");

// schema definition
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: String, required: true },
  specifications: [specificationSchema],
});

module.exports = productSchema;
