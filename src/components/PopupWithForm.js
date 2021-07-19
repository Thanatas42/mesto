import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(handleSubmit, popupSelector) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._inputList = Array.from(this.popup.querySelectorAll('.popup__input'));
    this._formElement = this.popup.querySelector('.popup__form');
  };

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => formValues[input.name] = input.value);
    return formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.closePopup();
    });
  };

  closePopup() {
    super.closePopup();
    this._formElement.reset();
  };
};
