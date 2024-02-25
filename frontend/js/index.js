/*
  * This file contains the logic for the frontend of the application. It is responsible for making requests to the backend server and rendering the user interface.

  * Functions:
  getAllUsers() - Makes a GET request to the backend server to retrieve all users from the database and renders them on the page.
  toggleUsers() - Toggles the visibility of the user list on the page.
  
  * Form:
  addUserForm - Form for adding a new user to the database. Contains input fields for username, email, city, street, house number, favorite number, and authentication token.

  * Event Listeners:
  DOMContentLoaded - Event listener that runs when the DOM is fully loaded. Calls the toggleUsers function to display the user list on the page.
  addUserForm - Listens for a submit event on the form and sends a POST request to the backend server to add a new user to the database.
  */

let toggleUsers;

document.addEventListener("DOMContentLoaded", function () {
  function getAllUsers() {
    const usersList = document.getElementById("users");
    let counter = 1;
    fetch("http://localhost:5001/users")
      .then((response) => response.json())
      .then((users) => {
        users.forEach((user) => {
          const address = user.address[0];

          const userDiv = document.createElement("div");
          userDiv.className = "user";

          const userIdDiv = document.createElement("div");
          userIdDiv.className = "id";
          userIdDiv.textContent = `${counter++}`;
          userDiv.appendChild(userIdDiv);

          const userInfoDiv = document.createElement("div");
          userInfoDiv.className = "userInfo";
          userDiv.appendChild(userInfoDiv);

          const usernameDiv = document.createElement("div");
          usernameDiv.className = "username";
          usernameDiv.textContent = `Username: ${user.username}`;
          userInfoDiv.appendChild(usernameDiv);

          const emailDiv = document.createElement("div");
          emailDiv.className = "email";
          emailDiv.textContent = `Email: ${user.email}`;
          userInfoDiv.appendChild(emailDiv);

          const addressDiv = document.createElement("div");
          addressDiv.className = "address";
          addressDiv.textContent = `Address: ${address.city}, ${address.street}, ${address.houseNumber}`;
          userInfoDiv.appendChild(addressDiv);

          const favNumberDiv = document.createElement("div");
          favNumberDiv.className = "favNumber";
          favNumberDiv.textContent = `Favorite Number: ${user.favNumber}`;
          userInfoDiv.appendChild(favNumberDiv);

          usersList.appendChild(userDiv);
        });
      });
  }

  toggleUsers = function () {
    const usersList = document.getElementById("users");

    if (usersList.style.display === "none") {
      usersList.style.display = "block";
      toggleButton.textContent = "Close";
      toggleButton.style.backgroundColor = "red";
      toggleButton.style.width = "8rem";

      getAllUsers();
    } else {
      usersList.style.display = "none";
      toggleButton.textContent = "Get All Users";
      toggleButton.style.backgroundColor = "#2c6fbb";
      toggleButton.style.width = "50%";
      usersList.innerHTML = "";
    }
  };

  document.getElementById("toggleButton").click();

  // ADD USER FORM

  document
    .getElementById("addUserForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const city = document.getElementById("city");
      const street = document.getElementById("street");
      const houseNumber = document.getElementById("housenumber");
      const favNumber = document.getElementById("favNumber");
      const token = document.getElementById("token");

      fetch("http://localhost:5001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token.value}`,
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          address: [
            {
              city: city.value,
              street: street.value,
              houseNumber: houseNumber.value,
            },
          ],
          favNumber: favNumber.value,
        }),
      })
        .then((response) => {

          if (response.ok) {
            clearErrorMessage();
            // Clear input fields after successful submission
            username.value = "";
            email.value = "";
            city.value = "";
            street.value = "";
            houseNumber.value = "";
            favNumber.value = "";
            token.value = "";
            return response.json();
          } else if (response.status === 401) {
            throw new Error("Invalid token");
          } else {
            throw new Error("Error adding user");
          }
        })
        .then((data) => {
          console.log("User added successfully:", data);
        })
        .catch((error) => {
          const errorMessage =
            error.message === "Invalid token"
              ? "Unauthorized due to invalid token, but I will hire you"
              : "Error adding user";
          displayErrorMessage(errorMessage);
          console.log("Error adding user:", error);
        });
    });
});

function displayErrorMessage(message) {
  const errorDiv = document.createElement("div");
  errorDiv.id = "tokenError";
  errorDiv.classList.add("error-message");
  errorDiv.textContent = message;

  const errorMessageContainer = document.getElementById("error-message");
  errorMessageContainer.innerHTML = "";
  errorMessageContainer.appendChild(errorDiv);
}

function clearErrorMessage() {
  const errorMessageContainer = document.getElementById("error-message");
  errorMessageContainer.innerHTML = "";
}
