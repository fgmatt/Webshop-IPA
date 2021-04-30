// library
const mongoose = require("mongoose");

// schema definition
const cardInformationSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    validThru: { type: String, required: true },
    cardNr: { type: String, required: true },
    cvv: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = cardInformationSchema;
