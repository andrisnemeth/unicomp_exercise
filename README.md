# unicomp_exercise
Client data management exercise with NodeJs and MongoDB

Overview

This project consists of a backend written in NodeJS, with two endpoints: GET `/users` to retrieve all the users and their data from the database, and POST `/users` to add a new user to the database. Additionally, token authentication is implemented for the POST endpoint. Input validation is not implemented at the moment.

While the task is originally required only backend solution running in local environment, I added a simple frontend implementation with HTML, JS and CSS.


Features
GET `/users` to retrieve all the users and their data from the database
POST `/users` to add a new user to the database.
Simple frontend for better user experience

Prerequisites

Before running the project, ensure you have the following installed:

Node.js
MongoDB

Installation

Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies using npm install.

Configuration

Before running the project, make sure to configure the environment variables:

MONGODB_URI: MongoDB connection URI.
MONGODB_DB: MongoDB database name.
PORT: Port on which the server will run.
AUTHENTICATION_TOKEN: Token for authentication when adding a new user.
Create a .env file in the backend directory of the project and add the required variables.

Usage
Go into the backend folder of the application and start the project with npm run dev.
For frontend, I suggest to use Live Server VSCode extension.


Project Structure

The project structure is as follows:

backend/: Contains the backend code written in Node.js.
frontend/: Contains the frontend code written in HTML, JavaScript, and CSS.
README.md: Documentation for the project.
LICENSE.md: License documentation

Technologies Used

Node.js
Express.js
MongoDB
HTML
JavaScript
CSS

Credits

MongoDB - https://www.mongodb.com
Mongoose - https://mongoosejs.com/docs/index.html