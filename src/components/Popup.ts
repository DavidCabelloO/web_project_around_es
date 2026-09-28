export class Popup{
    protected selector:string;
    constructor(selector:string){
        this.selector = selector;
    }

    protected getElement():HTMLElement {
        const popupElement = document.querySelector(this.selector) as HTMLElement;
        return popupElement;
    }
 
    public open():void {
        this.getElement().classList.add("popup_is-opened");
        document.addEventListener("keydown",this.handleEscClose);
    }

    public close = ():void=> {
        this.getElement().classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }

    // almacena la lógica para cerrar el popup al pulsar la tecla Esc (tipa el evento como `KeyboardEvent`)
    private handleEscClose = (evt:KeyboardEvent):void =>{
        if (evt.key === "Escape") {
            this.close();
        }
    }

    // agrega un detector de eventos de click al icono para cerrar el popup y al área sombreada.
    public setEventListeners():void{
        const popupElement = this.getElement();
        const closePopupBtn = popupElement.querySelector("popup__close") as HTMLButtonElement;
        closePopupBtn.addEventListener("click", () => this.close());

        popupElement.addEventListener("click", (evt:MouseEvent) => {
            if (evt.target !== popupElement){
                this.close();
            }
        });
    }
}