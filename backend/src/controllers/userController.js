/**
 * userController.js
 * 
 * This file defines the controller functions for the user-related endpoints.
 * 
 * Functions:
 * getAllUsers(req, res) - Retrieves every user from the database using the userService. Sends a 200 OK response with the users, or a 500 Internal Server Error response if an error occurs.
 * createUser(req, res) - Creates a new user in the database using the userService. 
 Sends a 200 OK response with the created user, or a 500 Internal Server Error response if an error occurs.
 */

const userService = require("../services/userService");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
