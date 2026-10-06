import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
    img;
    constructor(img, selector) {
        super(selector);
        this.img = img;
    }
}
