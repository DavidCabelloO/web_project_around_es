import {CardData} from "../types/types.js";

export abstract class Card {
  private name: string;
  private link: string;
  private element!: HTMLElement;
  private selector: string;
  private handleCardClick: () =>void;

  constructor({name, link}:CardData, selector: string, handleCardClick) {
    this.name = name;
    this.link = link;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
  }

  private handleCardClick = (evt:MouseEvent):void => {
    const cardElement = this.element.querySelector(".card") as HTMLElement;
    evt.preventDefault();
  }

  private setEventListeners():void{
    const cardElement = this.element.querySelector(".card") as HTMLElement;
    cardElement.addEventListener("click",this.handleCardClick);

  }

  private getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(this.selector) as HTMLTemplateElement;
    const cardElement = cardTemplate.content.querySelector(".card")!.cloneNode(true) as HTMLElement;

    return cardElement;
  }

  public generateCard(): HTMLElement;{
    this.element = this.getTemplate();
    this.setEventListeners();
  }

}