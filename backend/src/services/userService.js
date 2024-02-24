/**
 * userService.js
 *
 * This file defines the service functions for interacting with the User model in the database.
 *
 * Functions:
 * getAllUsers() - Retrieves every user from the database. Throws an error if an error occurs.
 * createUser(userData) - Creates a new user in the database with the provided data. Throws an error if an error occurs.
 */

const User = require("../models/userModel");

exports.getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(`Error finding all the users: ${error.message}`);
  }
};

exports.createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error(`Error creating the user: ${error.message}`);
  }
};
