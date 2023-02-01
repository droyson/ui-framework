const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const fullNameInput = document.getElementById("fullName");
const editSaveButton = document.getElementById("editSave");

const state = new Proxy(
  {
    firstName: "",
    lastName: "",
    isEdit: false,
  },
  {
    get(object, key) {
      switch (key) {
        case "fullName":
          return `${Reflect.get(object, "firstName")} ${Reflect.get(
            object,
            "lastName"
          )}`;
        default:
          return Reflect.get(...arguments);
      }
    },
    set(object, key, value) {
      switch (key) {
        case "fullName":
          const fName = value?.split(" ")[0] || "";
          const lName = value?.split(" ")[1] || "";
          firstNameInput.value = fName;
          lastNameInput.value = lName;
          fullNameInput.value = value;
          Reflect.set(object, "firstName", fName);
          Reflect.set(object, "lastName", lName);
          break;
        case "isEdit":
          fullNameInput.disabled = !value;
          editSaveButton.innerText = value ? "Save" : "Edit";
          Reflect.set(...arguments);
          break;
        default:
          Reflect.set(...arguments);
          document.getElementById(key).value = value;
          fullNameInput.value = `${object.firstName} ${object.lastName}`;
      }
    },
  }
);

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

fetch("/user.json")
  .then((res) => res.json())
  .then((data) => {
    state.fullName = data.fullName;
  });
