import type { FormConfig } from "../types/types.js";

interface FormValues {
  [key: string]: string;
}

export class FormValidator {
  private config: FormConfig;
  private form: HTMLFormElement;
  // private inputList!:NodeListOf<HTMLInputElement>;
  private buttonElement: HTMLButtonElement;
  constructor(config: FormConfig, form: HTMLFormElement) {
    this.config = config;
    this.form = form;
    // this.inputList = Array.from(form.querySelectorAll<HTMLInputElement>(config.inputSelector));
    const button = form.querySelector<HTMLButtonElement>(
      config.submitButtonSelector,
    );
    this.buttonElement = form.querySelector<HTMLButtonElement>(
      config.submitButtonSelector,
    )!;
  }

  private getInputValues(): FormValues {
    const formValues: FormValues = {};

    // this.inputList.forEach((input) => {
    //     formValues[input.name] = input.value;
    // });

    return formValues;
  }

  //comprobar validez del campo
  private checkValidity(): void {}

  private changeButtonSubmit(): void {}

  private addEvents(): void {}

  public enableValidation(): void {}

  // reiniciar el estado del formulario cada vez que el usuario abra un modal
  public resetValidation(): void {}
}
