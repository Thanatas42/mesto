import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(handleSubmit, popupSelector) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._inputArray = Array.from(this.popup.querySelectorAll(".popup__text"));
    this._formPopup = this.popup.querySelector(".popup__form");
    this._saveButton = this.popup.querySelector(".popup__save-button");
  };

  _getInputValues() {
    const formValues = {};
    this._inputArray.forEach((input) => (formValues[input.name] = input.value));
    return formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._saveButton.textContent = "Сохранить...";
      this._handleSubmit(this._getInputValues()).then(() => this.closePopup())
        .finally(() => (this._saveButton.textContent = "Сохранить"));
    });
  };

  closePopup() {
    super.closePopup();
    this._formPopup.reset();
  };
};
