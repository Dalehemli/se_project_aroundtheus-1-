const modalWindow = document.querySelector(".popup");
const editForm = document.querySelector(".popup__form");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const nameInputField = editForm.querySelector(".popup__input_type_name");
const descriptionInputField = editForm.querySelector(
  ".popup__input_type_description"
);

function toggleModalVisibility() {
  if (!modalWindow.classList.contains("popup_opened")) {
    nameInputField.value = profileName.textContent;
    descriptionInputField.value = profileDescription.textContent;
  }

  modalWindow.classList.toggle("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInputField.value;
  profileDescription.textContent = descriptionInputField.value;

  toggleModalVisibility();
}

editForm.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", toggleModalVisibility);
closeButton.addEventListener("click", toggleModalVisibility);
