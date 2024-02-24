/**
 * userModel.js
 * 
 * This file defines the schema for the User model in the MongoDB database.
 * 
 * Schemas:
 * userAddressSchema - Defines the schema for the address field in the User model. Contains fields for city, street, and house number.
 * userSchema - Defines the schema for the User model. Contains fields for username, email, address, and favNumber.
 * 
 * Models:
 * User - The User model, created from the userSchema.
 */

const mongoose = require("mongoose");

const userAddressSchema = new mongoose.Schema({
  city: String,
  street: String,
  houseNumber: String,
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    address: {
      type: [userAddressSchema],
      required: true,
    },
    favNumber: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
