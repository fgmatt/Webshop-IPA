// library
const mongoose = require("mongoose");

// schemas
const addressInformationSchema = require("./address-information");
const cardInformationSchema = require("./card-information");

// schema definition
const userSchema = new mongoose.Schema(
  {
    email: { type: string, required: true },
    token: { type: string, required: true },
    addressInformation: [addressInformationSchema],
    cardInformationSchema: [cardInformationSchema],
  },
  { timestamps: true }
);

module.exports = userSchema;
