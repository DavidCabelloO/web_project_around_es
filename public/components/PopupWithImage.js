import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
    img;
    src;
    constructor(selector, { name, link }) {
        super(selector);
        this.img = name;
        this.src = link;
    }
    open() {
        const popupElement = super.getElement();
        const imgPopupElement = popupElement.querySelector(".popup__image");
        imgPopupElement.src = this.src;
        const imgNamePopupElement = popupElement.querySelector(".popup__caption");
        imgNamePopupElement.textContent = this.img;
        super.open();
    }
}
