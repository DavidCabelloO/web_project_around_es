export class FormValidator {
    config;
    form;
    inputList;
    buttonElement;
    constructor(config, form) {
        this.config = config;
        this.form = form;
        this.inputList = Array.from(form.querySelectorAll(config.inputSelector));
        const button = form.querySelector(config.submitButtonSelector);
        this.buttonElement = button;
    }
    getInputValues() {
        const formValues = {};
        this.inputList.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }
    //comprobar validez del campo
    checkValidity() {
    }
    changeButtonSubmit() {
    }
    addEvents() {
    }
    enableValidation() {
    }
    // reiniciar el estado del formulario cada vez que el usuario abra un modal
    resetValidation() {
    }
}
