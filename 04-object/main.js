const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const fullNameInput = document.getElementById("fullName");
const editSaveButton = document.getElementById("editSave");

const state = {
  get firstName() {
    return firstNameInput.value || "";
  },
  set firstName(value) {
    firstNameInput.value = value;
    this.fullName = this.lastName ? `${value} ${this.lastName}` : value;
  },
  get lastName() {
    return lastNameInput.value || "";
  },
  set lastName(value) {
    lastNameInput.value = value;
    if (value) {
      this.fullName = `${this.firstName} ${value}`;
    }
  },
  get isEdit() {
    return !fullNameInput.disabled;
  },
  set isEdit(value) {
    fullNameInput.disabled = !value;
    editSaveButton.innerText = value ? "Save" : "Edit";
  },
};

Object.defineProperty(state, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    fullNameInput.value = value;
    let fName = value?.split(" ")[0] || "";
    let lName = value?.split(" ")[1] || "";
    if (fName !== this.firstName) {
      this.firstName = fName;
    }
    if (lName !== this.lastName) {
      this.lastName = lName;
    }
  },
});

firstNameInput.addEventListener("keyup", (e) => {
  state.firstName = e.target.value;
});

lastNameInput.addEventListener("keyup", (e) => {
  state.lastName = e.target.value;
});

editSaveButton.addEventListener("click", (e) => {
  state.isEdit = !state.isEdit;
});

fullNameInput.addEventListener("keyup", (e) => {
  state.fullName = e.target.value;
});
