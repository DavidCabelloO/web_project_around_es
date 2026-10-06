import type { FormConfig } from "../types.js";

export const defaultFormConfig: FormConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".pupup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form_input_type_error",
  errorClass: "form__input-error-active",
};
