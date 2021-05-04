// library
const mongoose = require("mongoose");

// schema definition
const AddressInformationSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    street: { type: String, required: true },
    postcode: { type: Number, required: true },
    locality: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = AddressInformationSchema;
