const modalWindow = document.querySelector(".popup");
const editForm = document.querySelector(".popup__content");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__subtitle");

const titleInputField = editForm.querySelector(".popup__input_type_name");
const descriptionInputField = editForm.querySelector(
  ".popup__input_type_description"
);

function toggleModalVisibility() {
  if (!modalWindow.classList.contains("popup__is_opened")) {
    titleInputField.value = profileTitle.textContent;
    descriptionInputField.value = profileDescription.textContent;
  }

  modalWindow.classList.toggle("popup__is_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = titleInputField.value;
  profileDescription.textContent = descriptionInputField.value;

  toggleModalVisibility();
}

editForm.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", toggleModalVisibility);
closeButton.addEventListener("click", toggleModalVisibility);
