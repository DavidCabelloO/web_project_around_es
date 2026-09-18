// # Variables DOM
// ## template
export const cardTemplate= document.querySelector("#card__template") as HTMLTemplateElement; //Template de card
// ## Profile section
export const profileSelect= document.querySelector(".profile") as HTMLElement; //Sección del perfil
export const cardsContainer= document.querySelector(".cards__list") as HTMLElement; //contenedor de cartas
export const addCardButton= document.querySelector(".profile__add-button") as HTMLButtonElement; //agregar carta button
export const profileEditBtn = document.querySelector(".profile__edit-button") as HTMLButtonElement;

// ## add card menu
export const addCardPopupModal = document.querySelector("#new-card-popup") as HTMLElement; // Modal de agregar carta
export const addCardCloseModalBtn = addCardPopupModal.querySelector(".popup__close") as HTMLButtonElement; // Boton cerrarModal de agregar carta
export const cardNameInput = addCardPopupModal.querySelector(".popup__input_type_card-name") as HTMLInputElement;
export const cardLinkInput = addCardPopupModal.querySelector(".popup__input_type_url") as HTMLInputElement;
export const addCardForm = addCardPopupModal.querySelector("#new-card-form") as HTMLFormElement; //formulario para agregar carta

// ## image popup
export const imagePopup = document.querySelector("#image-popup") as HTMLElement;
export const imagePopupCloseBtn = imagePopup.querySelector(".popup__close") as HTMLButtonElement;
export const imagePopupTitle = imagePopup.querySelector(".popup__caption") as HTMLElement; // texto pequeño de subindice
export const imagePopupDisplay = imagePopup.querySelector(".popup__image") as HTMLImageElement;

// ## Profile edition
export const popupModal= document.querySelector("#edit-popup") as HTMLElement;
export const profileCloseEditBtn = popupModal.querySelector(".popup__close") as HTMLButtonElement;
export const profileName = profileSelect.querySelector(".profile__title") as HTMLElement;
export const profileDescription = profileSelect.querySelector(".profile__description") as HTMLElement;
export const formElement = popupModal.querySelector("#edit-profile-form") as HTMLFormElement; //formulario de edición de perfil
export const nameInput = formElement.querySelector(".popup__input_type_name") as HTMLInputElement;
export const jobInput = formElement.querySelector(".popup__input_type_description") as HTMLInputElement;