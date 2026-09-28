import {Popup} from "./Popup";

export class PopupWithForm extends Popup{
    private img:string;
    constructor(img:string,selector:string){
        super(selector);
        this.img = img;
    }


}