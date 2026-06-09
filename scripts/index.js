//código JavaScript
initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

//Imprime en la consola todos los lugares del array initialCards
/*
initialCards.forEach(function (item) {
  console.log(item.name);
});
*/

function openModal(modalEl) {
  modalEl.classList.add("popup_is-opened");
}

function closeModal(modalEl) {
  modalEl.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  openModal(popupModal);
  fillProfileForm();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupModal);
}

const profileSelect = document.querySelector(".profile"); //Sección del perfil
const popupModal = document.querySelector("#edit-popup"); //Modal de edición del perfil

const profileEditBtn = document.querySelector(".profile__edit-button");
const profileCloseEditBtn = popupModal.querySelector(".popup__close");

const profileName = profileSelect.querySelector(".profile__title");
const profileDescription = profileSelect.querySelector(".profile__description");

let formElement = popupModal.querySelector("#edit-profile-form");
let nameInput = formElement.querySelector(".popup__input_type_name");
let jobInput = formElement.querySelector(".popup__input_type_description");

profileEditBtn.addEventListener("click", () => handleOpenEditModal());
formElement.addEventListener("submit", (evt) => handleProfileFormSubmit(evt));
profileCloseEditBtn.addEventListener("click", () => closeModal(popupModal));
