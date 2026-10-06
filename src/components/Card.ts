import type { CardData } from "../types/types.js";
export type HandleCardClick = () => void;

export class Card {
  private name: string;
  private link: string;
  private element!: HTMLElement;
  private selector: string;
  private handleCardClick: () => void;

  constructor(
    { name, link }: CardData,
    selector: string,
    handleCardClick: HandleCardClick,
  ) {
    this.name = name;
    this.link = link;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
  }

  private setEventListeners(): void {
    const cardImage = this.element.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    cardImage.addEventListener("click", this.handleCardClick);

    const cardDelBtn = this.element.querySelector(
      ".card__delete-button",
    ) as HTMLButtonElement;
    cardDelBtn.addEventListener("click", () => this.element.remove());

    const cardLikeBtn = this.element.querySelector(
      ".card__like-button",
    ) as HTMLButtonElement;
    cardLikeBtn.addEventListener("click", () =>
      cardLikeBtn.classList.toggle("card__like-button_is-active"),
    );
  }

  private getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      this.selector,
    ) as HTMLTemplateElement;
    const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    return cardElement;
  }

  public generateCard(): HTMLElement {
    this.element = this.getTemplate();
    const cardElement = this.element;
    const cardImage = cardElement.querySelector(
      ".card__image",
    ) as HTMLImageElement;
    cardImage.src = this.link;
    cardImage.alt = this.name;
    const cardTitle = cardElement.querySelector(".card__title") as HTMLElement;
    cardTitle.textContent = this.name;

    this.setEventListeners();

    return cardElement;
  }
}
