/**
 * userRoutes.js
 * 
 * This file sets up the routes for the user-related endpoints.
 * 
 * Routes:
 * GET / - Retrieves every user in the database. Handled by userController.getAllUsers.
 * POST / - Creates a new user. This route is protected by the authenticateToken middleware.
The request is then handled by userController.createUser.
 */

const express = require("express");
const authenticateToken = require("../authMiddleWare");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", authenticateToken, userController.createUser);

module.exports = router;
