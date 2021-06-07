import Card from './Card.js';
import FormValidator from './validate.js';
import initialCards from './initial-Cards.js';

const PopupTypeEditProfile = document.querySelector('.popup_type_edit-form');
const PopupTypeAddCard = document.querySelector('.popup_type_add-card');
const ButtonCloseEdit = document.querySelector('.popup__close-button_edit');
const ButtonShowEdit = document.querySelector('.profile-info__edit-button');
const ButtonSaveEdit = document.querySelector('.popup__container_type_edit-form');
const ButtonAddCard = document.querySelector('.profile__add-button');
const ButtonCloseAdd = document.querySelector('.popup__close-button_add');
const ButtonAddSave = document.querySelector('.popup__container_type_add-card');
const cards = document.querySelector('.cards');
const viewpopup = document.querySelector('.popup_type_show-image');
const postName = document.querySelector('.popup__post-name');
const link = document.querySelector('.popup__post-subname');
const profileName = document.querySelector('.profile-info__name');
const profileSubName = document.querySelector('.profile-info__subname');
const InputTextName = document.querySelector('.popup__text_name');
const popupTextSubName = document.querySelector('.popup__text_subname');
const ButtonCloseView = document.querySelector('.popup__close-button_view');
const ButtonSubmitPopupAdd = document.querySelector('.popup__save-button_add');
/*Спасибо вам за ревью! у разработчика две проблемы, именование переменных и инвалидация кэшей))
  критические замечания устранил, замечания можно лучше поправлю к след. спринту. Горит дедлайн*/


function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupMouse);
  document.removeEventListener('keydown', closePopupEsc);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupMouse);
  document.addEventListener('keydown', closePopupEsc);
}

function editForm() {
  profileName.textContent = InputTextName.value;
  profileSubName.textContent = popupTextSubName.value;
  closePopup(PopupTypeEditProfile);
}

initialCards.forEach((item) => {
  const card = new Card(item, '#card', openPopup);
  const cardElement = card.generateCard();

  cards.append(cardElement);
});

ButtonCloseView.addEventListener('click', () => {
  closePopup(viewpopup);
});

ButtonShowEdit.addEventListener('click', () => {
  openPopup(PopupTypeEditProfile);
  InputTextName.value = profileName.textContent;
  popupTextSubName.value = profileSubName.textContent;
});
ButtonCloseEdit.addEventListener('click', () => {
  closePopup(PopupTypeEditProfile);
});
ButtonSaveEdit.addEventListener('submit', editForm);
ButtonAddCard.addEventListener('click', () => {
  openPopup(PopupTypeAddCard);

});
ButtonCloseAdd.addEventListener('click', () => {
  closePopup(PopupTypeAddCard);
});

ButtonAddSave.addEventListener('submit', () => {
  var item = {
    name: postName.value,
    link: link.value
  };

  const card = new Card(item, '#card', openPopup);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);


  closePopup(PopupTypeAddCard);
  link.value = "";
  postName.value = "";
  ButtonSubmitPopupAdd.disabled = true;
});

function closePopupMouse(evt) {
  if (evt.target === evt.currentTarget) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
}

const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

const editPlaceFormValidator = new FormValidator(config, PopupTypeEditProfile);
editPlaceFormValidator.enableValidation();


const editProfileFormValidator = new FormValidator(config, PopupTypeAddCard);
editProfileFormValidator.enableValidation();
