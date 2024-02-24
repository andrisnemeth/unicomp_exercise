/*
  * server.js is the entry point of the application. It is responsible for creating the express server and connecting to the MongoDB database.

  * Functions:
  getDbConnection() - Connects to the MongoDB database.
 
  * Routes:
 /users - Routes for user-related endpoints. Defined in userRoutes.js.
*/

const express = require("express");
const userRoutes = require("./routes/userRoutes");
const getDbConnection = require("./db");
const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use("/users", userRoutes);

getDbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
