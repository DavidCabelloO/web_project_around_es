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
        const cardImage = this.element.querySelector(".card__image");
        cardImage.addEventListener("click", this.handleCardClick);
        const cardDelBtn = this.element.querySelector(".card__delete-button");
        cardDelBtn.addEventListener("click", () => this.element.remove());
        const cardLikeBtn = this.element.querySelector(".card__like-button");
        cardLikeBtn.addEventListener("click", () => cardLikeBtn.classList.toggle("card__like-button_is-active"));
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
        const cardElement = this.element;
        const cardImage = cardElement.querySelector(".card__image");
        cardImage.src = this.link;
        cardImage.alt = this.name;
        const cardTitle = cardElement.querySelector(".card__title");
        cardTitle.textContent = this.name;
        this.setEventListeners();
        return cardElement;
    }
}
