const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const fullNameInput = document.getElementById("fullName");

let firstName = "";
let lastName = "";

firstNameInput.addEventListener("keyup", (e) => {
  firstName = e.target.value;

  fullNameInput.value = `${firstName} ${lastName}`;
});

lastNameInput.addEventListener("keyup", (e) => {
  lastName = e.target.value;

  fullNameInput.value = `${firstName} ${lastName}`;
});

fetch("/user.json")
  .then((res) => res.json())
  .then((data) => {
    firstName = data.firstName;
    lastName = data.lastName;
    firstNameInput.value = data.firstName;
    lastNameInput.value = data.lastName;
    fullNameInput.value = data.fullName;
  });
