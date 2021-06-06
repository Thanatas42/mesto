import Card from './Card.js';
import FormValidator from './validate.js';
import initialCards from './initial-Cards.js';

const editProfile = document.querySelector('.popup_type_edit-form');
const addCard = document.querySelector('.popup_type_add-card');
const closeEditButton = document.querySelector('.popup__close-button_edit');
const showEditButton = document.querySelector('.profile-info__edit-button');
const saveEditButton = document.querySelector('.popup__container_type_edit-form');
const addCardButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-button_add');
const addSaveButton = document.querySelector('.popup__container_type_add-card');
const cards = document.querySelector('.cards');
const viewpopup = document.querySelector('.popup_type_show-image');
const postName = document.querySelector('.popup__post-name');
const link = document.querySelector('.popup__post-subname');
const profileName = document.querySelector('.profile-info__name');
const profileSubName = document.querySelector('.profile-info__subname');
const popupTextName = document.querySelector('.popup__text_name');
const popupTextSubName = document.querySelector('.popup__text_subname');
const closeButtonView = document.querySelector('.popup__close-button_view');
const popupAdd = document.querySelector('.popup__save-button_add');


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
  profileName.textContent = popupTextName.value;
  profileSubName.textContent = popupTextSubName.value;
  closePopup(editProfile);
}

initialCards.forEach((item) => {
  const card = new Card(item, '#card', openPopup);
  const cardElement = card.generateCard();

  cards.append(cardElement);
});

closeButtonView.addEventListener('click', () => {
  closePopup(viewpopup);
});

showEditButton.addEventListener('click', () => {
  openPopup(editProfile);
  popupTextName.value = profileName.textContent;
  popupTextSubName.value = profileSubName.textContent;
});
closeEditButton.addEventListener('click', () => {
  closePopup(editProfile);
});
saveEditButton.addEventListener('submit', editForm);
addCardButton.addEventListener('click', () => {
  openPopup(addCard);

});
closeAddButton.addEventListener('click', () => {
  closePopup(addCard);
});

addSaveButton.addEventListener('submit', () => {
  var item = {
    name: postName.value,
    link: link.value
  };

  const card = new Card(item, '#card', openPopup);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);


  closePopup(addCard);
  link.value = "";
  postName.value = "";
  popupAdd.disabled = true;
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

const editPlaceFormValidator = new FormValidator(config, editProfile);
editPlaceFormValidator.enableValidation();


const editProfileFormValidator = new FormValidator(config, addCard);
editProfileFormValidator.enableValidation();
