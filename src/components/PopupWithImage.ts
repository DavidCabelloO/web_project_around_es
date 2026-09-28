import {Popup} from "./Popup";

export class PopupWithImage extends Popup{   
    private img:string;
    private src:string;
    constructor(selector:string,img:string,src:string){
        super(selector);
        this.img=img;
        this.src=src;
    }

    public open():void{
        const popupElement = super.getElement();
        const imgPopupElement = popupElement.querySelector(".popup__image") as HTMLImageElement;
        imgPopupElement.src = this.src;
        const imgNamePopupElement = popupElement.querySelector(".popup__caption") as HTMLElement;
        imgNamePopupElement.textContent = this.img;
        super.open()
    }
}