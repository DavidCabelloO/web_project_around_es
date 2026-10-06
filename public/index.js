// import DOM constants
// import { cardTemplate } from "./utils/DOMConstants.js"; // import card template
// import {
//   profileSelect,
//   cardsContainer,
//   addCardButton,
//   profileEditBtn,
// } from "./utils/DOMConstants.js"; // import profile section
// import {
//   addCardPopupModal,
//   addCardCloseModalBtn,
//   cardNameInput,
//   cardLinkInput,
//   addCardForm,
// } from "./utils/DOMConstants.js"; // import add card menu
// import {
//   imagePopup,
//   imagePopupCloseBtn,
//   imagePopupTitle,
//   imagePopupDisplay,
// } from "./utils/DOMConstants.js"; // import image popup
// import {
//   popupModal,
//   profileCloseEditBtn,
//   profileName,
//   profileDescription,
//   formElement,
//   nameInput,
//   jobInput,
// } from "./utils/DOMConstants.js"; // import profile edition
// import components
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import { initialCardsList } from "./types/utils/InitialCards.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
// initialize initial cards in page
const initialCardsListHTML = new Section({
    items: initialCardsList,
    renderer: (item) => {
        const card = new Card(item, "#card__template", () => {
            const cardPopup = new PopupWithImage("#image-popup", item);
            cardPopup.open();
            cardPopup.setEventListeners();
        });
        const cardElement = card.generateCard();
        initialCardsListHTML.addItem(cardElement);
    },
}, ".cards__list");
initialCardsListHTML.renderItems();
// initialize userInfo
