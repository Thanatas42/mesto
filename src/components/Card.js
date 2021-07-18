class Card {
  _cardText;
  _cardImage;
  _cardSelector;
  _element;
  _isLiked;
  _handleOpenImage;
  _likeButton;
  _deleteButton;
  _placeImage;

  constructor(data, cardSelector, handleOpenImage) {
    this._cardText = data.name;
    this._cardImage = data.link;
    this._cardSelector = cardSelector;
    this._handleOpenImage = handleOpenImage;
    this._isLiked = false;
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._like()
    });

    this._deleteButton.addEventListener('click', () => {
      this._removeCard()
    });

    this._placeImage.addEventListener('click', () => {
      this._handleOpenImage(this._cardText, this._cardImage)
    });
  };

  _like() {
    this._likeButton.classList.toggle('card__like-button_theme_active');
    this._isLiked = !this._isLiked;
  };

  _removeCard() {
    this._element.remove();
    this._element.null;
  };

  _getTemplate() {
    const newCard = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return newCard;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.card__like-button');
    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._placeImage = this._element.querySelector('.card__image')
    this._setEventListeners();
    this._placeImage.src = this._cardImage;
    this._placeImage.alt = this._cardText;
    this._element.querySelector('.card__title').textContent = this._cardText;
    return this._element;
  };
};

export default Card
