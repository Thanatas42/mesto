class FormValidator {
  constructor(data, currentForm) {
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._currentForm = currentForm;
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._currentForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _showInputError = (inputElement) => {
    const errorElement = this._currentForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _checkInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners = () => {
    this._currentForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList = Array.from(this._currentForm.querySelectorAll(this._inputSelector));
    this._buttonElement = this._currentForm.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  resetValidation = () => {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement)
    });
    this._toggleButtonState();
  }

  enableValidation = () => {
    this._setEventListeners();
  }
};

export default FormValidator
