class FormValidator {
  #inputSelector;
  #submitButtonSelector;
  #inputErrorClass;
  #errorClass;
  #currentForm;
  #inputList;
  #buttonElement;

  constructor(data, currentForm) {
    this.#inputSelector = data.inputSelector;
    this.#submitButtonSelector = data.submitButtonSelector;
    this.#inputErrorClass = data.inputErrorClass;
    this.#errorClass = data.errorClass;
    this.#currentForm = currentForm;
  }

  #hideInputError = (inputElement) => {
    const errorElement = this.#currentForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this.#inputErrorClass);
    errorElement.classList.remove(this.#errorClass);
    errorElement.textContent = '';
  }

  #showInputError = (inputElement) => {
    const errorElement = this.#currentForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this.#inputErrorClass);
    errorElement.classList.add(this.#errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  #checkInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
      this.#hideInputError(inputElement);
    } else {
      this.#showInputError(inputElement);
    }
  }

  #hasInvalidInput = () => {
    return this.#inputList.some(inputElement => !inputElement.validity.valid);
  }

  #toggleButtonState = () => {
    if (this.#hasInvalidInput()) {
      this.#buttonElement.disabled = true;
    } else {
      this.#buttonElement.disabled = false;
    }
  }

  #setEventListeners = () => {
    this.#currentForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this.#inputList = Array.from(this.#currentForm.querySelectorAll(this.#inputSelector));
    this.#buttonElement = this.#currentForm.querySelector(this.#submitButtonSelector);
    this.#toggleButtonState();
    this.#inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this.#checkInputValidity(inputElement);

        this.#toggleButtonState();
      });
    });
  };


  enableValidation = () => {

    this.#setEventListeners();
  }
}

export default FormValidator
