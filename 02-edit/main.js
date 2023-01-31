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

// TODO: Update firstName and lastName on changing fullName
