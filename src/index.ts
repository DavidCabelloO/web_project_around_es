// import DOM constants
import {cardTemplate} from "./utils/DOMConstants"; // import card template
import {profileSelect,cardsContainer,addCardButton,profileEditBtn} from "./utils/DOMConstants"; // import profile section
import {addCardPopupModal,addCardCloseModalBtn,cardNameInput,cardLinkInput,addCardForm} from "./utils/DOMConstants"; // import add card menu
import {imagePopup,imagePopupCloseBtn,imagePopupTitle,imagePopupDisplay} from "./utils/DOMConstants"; // import image popup
import {popupModal,profileCloseEditBtn,profileName,profileDescription,formElement,nameInput,jobInput} from "./utils/DOMConstants"; // import profile edition

// import components
import {Card} from "./components/Card.js";
import type {HandleCardClick} from "./components/Card.js"
import { Section} from "./components/Section.js";
import type {RendererFunction} from "./components/Section.js";
import { Popup } from "./components/Popup.js";


// import init cards
import type {CardData} from "./types/types.js";
import {initialCardsList} from "./utils/InitialCards";
import { PopupWithImage } from "./components/PopupWithImage";

const initialCardsListHTML = new Section<CardData>(
    {items:initialCardsList,
        renderer:(item) => {
            const card = new Card(item,"#card__template",
                ()=> {const popup = new PopupWithImage("#card__template",item);
            });
                }
    },
    ".cards__list"
)
    
initialCardsListHTML.renderItems();

