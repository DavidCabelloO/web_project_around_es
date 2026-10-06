import { Popup } from "./Popup.js";
import type { CardData } from "../types/types.js";

export class PopupWithImage extends Popup {
  private img: string;
  private src: string;
  constructor(selector: string, { name, link }: CardData) {
    super(selector);
    this.img = name;
    this.src = link;
  }

  public open(): void {
    const popupElement = super.getElement();
    const imgPopupElement = popupElement.querySelector(
      ".popup__image",
    ) as HTMLImageElement;
    imgPopupElement.src = this.src;
    const imgNamePopupElement = popupElement.querySelector(
      ".popup__caption",
    ) as HTMLElement;
    imgNamePopupElement.textContent = this.img;
    super.open();
  }
}
