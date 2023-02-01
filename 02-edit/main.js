const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const fullNameInput = document.getElementById("fullName");
const editSaveButton = document.getElementById("editSave");

let firstName = "";
let lastName = "";
let isEdit = false;

firstNameInput.addEventListener("keyup", (e) => {
  firstName = e.target.value;

  fullNameInput.value = `${firstName} ${lastName}`;
});

lastNameInput.addEventListener("keyup", (e) => {
  lastName = e.target.value;

  fullNameInput.value = `${firstName} ${lastName}`;
});

editSaveButton.addEventListener("click", (e) => {
  isEdit = !isEdit;
  editSaveButton.innerText = isEdit ? "Save" : "Edit";
  fullNameInput.disabled = !isEdit;
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

fullNameInput.addEventListener("keyup", (e) => {
  const [fName, lName] = e.target.value.split(" ");
  firstName = fName;
  lastName = lName;
  firstNameInput.value = fName;
  lastNameInput.value = lName;
});
