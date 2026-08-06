//código JavaScript index.js
//importar funciones para validación de formularios
import { setEventListeners, toggleButtonState } from "./validate.js";

//importar tarjetas iniciales
import { initialCardsList } from "./initialCards.js";

// Variables
// #
const profileSelect = document.querySelector(".profile"); //Sección del perfil
const popupModal = document.querySelector("#edit-popup"); //Modal de edición del perfil
const cardTemplate = document.querySelector("#card__template"); //Template de card
const cardsContainer = document.querySelector(".cards__list"); //contenedor de cartas
const addCardButton = document.querySelector(".profile__add-button"); //agregar carta button

// #Modal añadir cartas
const addCardPopupModal = document.querySelector("#new-card-popup"); // Modal de agregar carta
const addCardCloseModalBtn = addCardPopupModal.querySelector(".popup__close"); // Boton cerrarModal de agregar carta
const cardNameInput = addCardPopupModal.querySelector(
  ".popup__input_type_card-name",
);

const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseBtn = imagePopup.querySelector(".popup__close");
const imagePopupTitle = imagePopup.querySelector(".popup__caption");
const imagePopupDisplay = imagePopup.querySelector(".popup__image");

const cardLinkInput = addCardPopupModal.querySelector(".popup__input_type_url");
const addCardForm = addCardPopupModal.querySelector("#new-card-form"); //formulario para agregar carta

const profileEditBtn = document.querySelector(".profile__edit-button");
const profileCloseEditBtn = popupModal.querySelector(".popup__close");

const profileName = profileSelect.querySelector(".profile__title");
const profileDescription = profileSelect.querySelector(".profile__description");

const formElement = popupModal.querySelector("#edit-profile-form"); //formulario de edición de perfil
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

// Funciones
function openModal(modalEl) {
  modalEl.classList.add("popup_is-opened");
  //añadir retroalimentación openedPopup para añadir el listener cuando se abre el modal
  openedPopup = modalEl;
  document.addEventListener("keydown", closeOverlayUpponEsc);
}

function closeModal(modalEl) {
  modalEl.classList.remove("popup_is-opened");
  //eliminar retroalimenatación openedPopup para cuando se abra un nuevo modal no interfiera
  openedPopup = null;
  document.removeEventListener("keydown", closeOverlayUpponEsc);
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

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = getCardElement(cardNameInput.value, cardLinkInput.value);
  cardsContainer.prepend(cardElement);
  addCardForm.reset();
  toggleButtonState(inputsNewPlace, newPlaceSubmitBtn); //ayudar al reseteo completo del modal añadir carta
  closeModal(addCardPopupModal);
}

function handleImagePopup(name, link) {
  imagePopupTitle.textContent = name;
  imagePopupDisplay.src = link;
  imagePopupDisplay.alt = name;
  openModal(imagePopup);
}

function getCardElement(name, link) {
  if (name === undefined) {
    name = "Sin título";
  }
  if (link === undefined) {
    link = "./images/placeholder.jpg";
  }
  const cardElement = cardTemplate.content.cloneNode(true); // clona el contenido del template
  const cardElementLi = cardElement.querySelector(".card"); //selecciona la tarjeta
  const cardTitle = cardElement.querySelector(".card__title"); // selecciona el título del elemento card
  const cardImage = cardElement.querySelector(".card__image"); // selecciona la imagen del elemento card
  const cardLikeBtn = cardElement.querySelector(".card__like-button"); //selecciona el boton de like
  const cardDelBtn = cardElement.querySelector(".card__delete-button"); //selecciona el boton de borrar

  cardTitle.textContent = name; // asigna la propiedad name del parámetro data -> asigna el nombre recibido como parámetro
  cardImage.src = link; // asigna los valores a las propiedades de la imagen como se indicó
  cardImage.alt = name; //un añadido para que tenga la robustez si falla la imagen

  cardLikeBtn.addEventListener("click", () =>
    cardLikeBtn.classList.toggle("card__like-button_is-active"),
  );

  cardDelBtn.addEventListener("click", () => cardElementLi.remove());

  cardImage.addEventListener("click", () => handleImagePopup(name, link));

  return cardElementLi;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.append(cardElement);
}

//De imprimir ahora añadirá las tarjetas
initialCardsList.forEach(function (item) {
  renderCard(item.name, item.link, cardsContainer);
});

//editar perfil
profileEditBtn.addEventListener("click", () => handleOpenEditModal());
formElement.addEventListener("submit", (evt) => handleProfileFormSubmit(evt));
profileCloseEditBtn.addEventListener("click", () => closeModal(popupModal));

//añadir tarjeta
addCardButton.addEventListener("click", () => openModal(addCardPopupModal));
addCardForm.addEventListener("submit", (evt) => handleCardFormSubmit(evt));
addCardCloseModalBtn.addEventListener("click", () =>
  closeModal(addCardPopupModal),
);

imagePopupCloseBtn.addEventListener("click", () => closeModal(imagePopup));

// Parte 2 (sprint 7)

const inputsProfileEdit = formElement.querySelectorAll(".popup__input");
const profileSubmitBtn = formElement.querySelector(".popup__button");
const inputsNewPlace = addCardForm.querySelectorAll(".popup__input");
const newPlaceSubmitBtn = addCardForm.querySelector(".popup__button");

// Estado inicial del boton crear tarjeta al cargar la página
toggleButtonState(inputsNewPlace, newPlaceSubmitBtn);

const allPopups = document.querySelectorAll(".popup");

let openedPopup = null; //revisar que un modal esté abierto

//Validación en tiempo real formulario editProfile
setEventListeners(inputsProfileEdit, profileSubmitBtn);

//Validación en tiempo real formulario newPlace
setEventListeners(inputsNewPlace, newPlaceSubmitBtn);

//cerrar ventana emergente con click fuera del modal
function closeOverlayUpponOutsideClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

allPopups.forEach((popup) => {
  popup.addEventListener("click", closeOverlayUpponOutsideClick);
});

function closeOverlayUpponEsc(evt) {
  if (evt.key === "Escape" && openedPopup) {
    closeModal(openedPopup);
  }
}
