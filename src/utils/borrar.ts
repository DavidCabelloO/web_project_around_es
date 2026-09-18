export const imagePopup = document.querySelector("#image-popup") as HTMLElement;
export const imagePopupCloseBtn = imagePopup.querySelector(".popup__close") as HTMLButtonElement;
export const imagePopupTitle = imagePopup.querySelector(".popup__caption") as HTMLElement;
export const imagePopupDisplay = imagePopup.querySelector(".popup__image") as HTMLImageElement;

export const cardLinkInput = addCardPopupModal.querySelector(".popup__input_type_url") as HTMLInputElement;
export const addCardForm = addCardPopupModal.querySelector("#new-card-form") as HTMLFormElement;
export const profileEditBtn = document.querySelector(".profile__edit-button") as HTMLButtonElement;
export const profileCloseEditBtn = popupModal.querySelector(".popup__close") as HTMLButtonElement;
export const profileName = profileSelect.querySelector(".profile__title") as HTMLHeadingElement;
export const profileDescription = profileSelect.querySelector(".profile__description") as HTMLParagraphElement;
export const formElement = popupModal.querySelector("#edit-profile-form") as HTMLFormElement;
export const nameInput = formElement.querySelector(".popup__input_type_name") as HTMLInputElement;
export const jobInput = formElement.querySelector(".popup__input_type_description") as HTMLInputElement;