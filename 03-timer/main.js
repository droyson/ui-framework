const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const fullNameInput = document.getElementById("fullName");
const editSaveButton = document.getElementById("editSave");

let firstName = "";
let lastName = "";
let isEdit = false;

firstNameInput.addEventListener("keyup", (e) => {
  firstName = e.target.value;
  updateValues();
});

lastNameInput.addEventListener("keyup", (e) => {
  lastName = e.target.value;
  updateValues();
});

editSaveButton.addEventListener("click", (e) => {
  isEdit = !isEdit;
  updateValues();
});

function updateValues() {
  firstNameInput.value = firstName;
  lastNameInput.value = lastName;
  fullNameInput.value = `${firstName} ${lastName}`;
  fullNameInput.disabled = !isEdit;
  editSaveButton.innerText = isEdit ? "Save" : "Edit";
}

// TODO: Update values regularly using timer
