// import DOM constants
import { cardTemplate } from "./types/utils/DOMConstants.js"; // import card template
import {
  profileSelect,
  cardsContainer,
  addCardButton,
  profileEditBtn,
} from "./types/utils/DOMConstants.js"; // import profile section
import {
  addCardPopupModal,
  addCardCloseModalBtn,
  cardNameInput,
  cardLinkInput,
  addCardForm,
} from "./types/utils/DOMConstants.js"; // import add card menu
import {
  imagePopup,
  imagePopupCloseBtn,
  imagePopupTitle,
  imagePopupDisplay,
} from "./types/utils/DOMConstants.js"; // import image popup
import {
  popupModal,
  profileCloseEditBtn,
  profileName,
  profileDescription,
  formElement,
  nameInput,
  jobInput,
} from "./types/utils/DOMConstants.js"; // import profile edition
// import components
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { Popup } from "./components/Popup.js";
import { initialCardsList } from "./types/utils/InitialCards.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
const setListenerPopup = (item) => {
  const popup = new PopupWithImage("#card__template", item);
  popup.open();
};
const initialCardsListHTML = new Section(
  {
    items: initialCardsList,
    renderer: (item) => {
      const card = new Card(item, "#card__template", () => {
        setListenerPopup(card);
      });
      const cardElementA = card.generateCard();
      initialCardsListHTML.addItem(cardElementA);
    },
  },
  ".cards__list",
);
initialCardsListHTML.renderItems();
