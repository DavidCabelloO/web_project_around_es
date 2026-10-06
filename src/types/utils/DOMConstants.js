// # Variables DOM
// ## template
export const cardTemplate = document.querySelector("#card__template"); //Template de card
// ## Profile section
export const profileSelect = document.querySelector(".profile"); //Sección del perfil
export const cardsContainer = document.querySelector(".cards__list"); //contenedor de cartas
export const addCardButton = document.querySelector(".profile__add-button"); //agregar carta button
export const profileEditBtn = document.querySelector(".profile__edit-button");
// ## add card menu
export const addCardPopupModal = document.querySelector("#new-card-popup"); // Modal de agregar carta
export const addCardCloseModalBtn = addCardPopupModal.querySelector(".popup__close"); // Boton cerrarModal de agregar carta
export const cardNameInput = addCardPopupModal.querySelector(".popup__input_type_card-name");
export const cardLinkInput = addCardPopupModal.querySelector(".popup__input_type_url");
export const addCardForm = addCardPopupModal.querySelector("#new-card-form"); //formulario para agregar carta
// ## image popup
export const imagePopup = document.querySelector("#image-popup");
export const imagePopupCloseBtn = imagePopup.querySelector(".popup__close");
export const imagePopupTitle = imagePopup.querySelector(".popup__caption"); // texto pequeño de subindice
export const imagePopupDisplay = imagePopup.querySelector(".popup__image");
// ## Profile edition
export const popupModal = document.querySelector("#edit-popup");
export const profileCloseEditBtn = popupModal.querySelector(".popup__close");
export const profileName = profileSelect.querySelector(".profile__title");
export const profileDescription = profileSelect.querySelector(".profile__description");
export const formElement = popupModal.querySelector("#edit-profile-form"); //formulario de edición de perfil
export const nameInput = formElement.querySelector(".popup__input_type_name");
export const jobInput = formElement.querySelector(".popup__input_type_description");
