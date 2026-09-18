import {Popup} from "./Popup";

export class PopupWithImage extends Popup{   
    private img:string;
    private src:string;
    constructor(img:string,src:string){
        super();
        this.img=img;
        this.src=src;
    }

    
}