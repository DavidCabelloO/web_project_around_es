export class Popup {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    getElement() {
        const popupElement = document.querySelector(this.selector);
        return popupElement;
    }
    open() {
        this.getElement().classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }
    close = () => {
        this.getElement().classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    };
    // almacena la lógica para cerrar el popup al pulsar la tecla Esc (tipa el evento como `KeyboardEvent`)
    handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };
    // agrega un detector de eventos de click al icono para cerrar el popup y al área sombreada.
    setEventListeners() {
        const popupElement = this.getElement();
        const closePopupBtn = popupElement.querySelector("popup__close");
        closePopupBtn.addEventListener("click", () => this.close());
        popupElement.addEventListener("click", (evt) => {
            if (evt.target !== popupElement) {
                this.close();
            }
        });
    }
}
