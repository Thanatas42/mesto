class Сard {
  _cardText;
  _cardImage;
  _cardSelector;
  _element;
  _isLiked;
  _openPopup;

  constructor(item, cardSelector, openPopup) {
    this._cardText = item.name;
    this._cardImage = item.link;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  _like(evt) {
    evt.target.classList.toggle('card__like-button_theme_active');
  }

  _remove() {
    this._element.remove();
  }

  _openPopupInfo(evt) {
    const popupImage = document.querySelector('.popup__image');
    popupImage.src = evt.target.getAttribute('src');
    popupImage.alt = this._cardText;
    document.querySelector('.popup__figure-name').textContent = this._cardText;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', (evt) => {
      this._like(evt);
    });

    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._remove();
    });

    this._element.querySelector('.card__image').addEventListener('click', (evt) => {
      this._openPopup(document.querySelector('.popup_type_show-image'));
      this._openPopupInfo(evt);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').src = this._cardImage;
    this._element.querySelector('.card__image').alt =  this._cardText;
    this._element.querySelector('.card__title').textContent =  this._cardText;

    return this._element;
  }
};

export default Сard
