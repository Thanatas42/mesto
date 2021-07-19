import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this.popup.querySelector('.popup__image');
    this._description = this.popup.querySelector('.popup__figure-name');
  };

  open({ name, link }) {
    this._image.src = link;
    this._image.alt = name;
    this._description.textContent = name;
    super.open()
  };
};
