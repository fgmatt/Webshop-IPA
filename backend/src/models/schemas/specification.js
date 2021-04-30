// library
const mongoose = require("mongoose");

// schema definition
const specificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = specificationSchema;
