export class FormValidator {
    config;
    form;
    // private inputList!:NodeListOf<HTMLInputElement>;
    buttonElement;
    constructor(config, form) {
        this.config = config;
        this.form = form;
        // this.inputList = Array.from(form.querySelectorAll<HTMLInputElement>(config.inputSelector));
        const button = form.querySelector(config.submitButtonSelector);
        this.buttonElement = form.querySelector(config.submitButtonSelector);
    }
    getInputValues() {
        const formValues = {};
        // this.inputList.forEach((input) => {
        //     formValues[input.name] = input.value;
        // });
        return formValues;
    }
    //comprobar validez del campo
    checkValidity() { }
    changeButtonSubmit() { }
    addEvents() { }
    enableValidation() { }
    // reiniciar el estado del formulario cada vez que el usuario abra un modal
    resetValidation() { }
}
