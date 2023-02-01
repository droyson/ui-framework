const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const fullNameInput = document.getElementById("fullName");
const editSaveButton = document.getElementById("editSave");

let firstName = "";
let lastName = "";
let isEdit = false;

firstNameInput.addEventListener("keyup", (e) => {
  firstName = e.target.value;
});

lastNameInput.addEventListener("keyup", (e) => {
  lastName = e.target.value;
});

editSaveButton.addEventListener("click", (e) => {
  isEdit = !isEdit;
});

function updateValues() {
  firstNameInput.value = firstName;
  lastNameInput.value = lastName;
  fullNameInput.value = `${firstName} ${lastName}`;
  fullNameInput.disabled = !isEdit;
  editSaveButton.innerText = isEdit ? "Save" : "Edit";
}

setInterval(updateValues, 1000);

fetch("/user.json")
  .then((res) => res.json())
  .then((data) => {
    firstName = data.firstName;
    lastName = data.lastName;
  });

fullNameInput.addEventListener("keyup", (e) => {
  const [fName, lName] = e.target.value.split(" ");
  firstName = fName;
  lastName = lName;
});
