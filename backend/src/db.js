/*
* db.js is a module that connects to the MongoDB database. It is imported into server.js and called in the getDbConnection function. The getDbConnection function is then called in server.js to establish a connection to the database before starting the server.
*/

require("dotenv").config();
const mongoose = require("mongoose");

const getDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB", err);
  }
};

module.exports = getDbConnection;
