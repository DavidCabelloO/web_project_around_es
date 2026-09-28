// import DOM constants
import {cardTemplate} from "./utils/DOMConstants"; // import card template
import {profileSelect,cardsContainer,addCardButton,profileEditBtn} from "./utils/DOMConstants"; // import profile section
import {addCardPopupModal,addCardCloseModalBtn,cardNameInput,cardLinkInput,addCardForm} from "./utils/DOMConstants"; // import add card menu
import {imagePopup,imagePopupCloseBtn,imagePopupTitle,imagePopupDisplay} from "./utils/DOMConstants"; // import image popup
import {popupModal,profileCloseEditBtn,profileName,profileDescription,formElement,nameInput,jobInput} from "./utils/DOMConstants"; // import profile edition

// import components
import {Card} from "./components/Card.js";
import { Section } from "./components/Section";

// import init cards
import type {CardData} from "./types/types.js";
import {initialCardsList} from "./utils/InitialCards";






// const cardList = new Section<CardData>({
//     data:initialCardsList,
//     renderer: (item) => {
//         const card =item.is
//     }
// }, ".cards")

// cardList.addItem();