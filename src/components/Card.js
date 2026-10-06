export class Card {
  name;
  link;
  element;
  selector;
  handleCardClick;
  constructor({ name, link }, selector, handleCardClick) {
    this.name = name;
    this.link = link;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
  }
  setEventListeners() {
    const cardElement = this.element.querySelector(".card");
    cardElement.addEventListener("click", this.handleCardClick);
  }
  getTemplate() {
    const cardTemplate = document.querySelector(this.selector);
    const cardElement = cardTemplate.content
      .querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this.element = this.getTemplate();
    this.element.setEventListeners();
    return this.element;
  }
}
