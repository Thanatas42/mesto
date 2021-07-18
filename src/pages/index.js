import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  profileNameInput,
  profileDescriptionInput,
  profileEdit,
  placeAdd,
  config
} from '../utils/constants.js';
import './index.css';

const imageSection = new Section({
  items: initialCards,
  renderer: (card) => {
    const newCard = new Card(card, '#card', handleOpenImage);
    return newCard.generateCard();
  }
}, '.cards');

imageSection.renderItems();

const userInfo = new UserInfo({ nameSelector: '.profile-info__name', descriptionSelector: '.profile-info__subname' });

function handleProfileFormSubmit(formValues) {
  userInfo.setUserInfo({ newNameValue: formValues['name-profile'], newDescriptionValue: formValues['subname'] });
};

function handlePlaceFormSubmit(formValues) {
  const item = {
    name: formValues['addCard'],
    link: formValues['subname']
  };

  imageSection.addItem(item);
};

const popupPlace = new PopupWithForm(handlePlaceFormSubmit, '.popup_type_add-card');
popupPlace.setEventListeners();
const popupProfile = new PopupWithForm(handleProfileFormSubmit, '.popup_type_edit-form')
popupProfile.setEventListeners();
const popupImage = new PopupWithImage('.popup_type_show-image');
popupImage.setEventListeners();

const editPlaceFormValidator = new FormValidator(config, popupPlace.popup);
editPlaceFormValidator.enableValidation();
const editProfileFormValidator = new FormValidator(config, popupProfile.popup);
editProfileFormValidator.enableValidation();


function handleOpenImage(name, link) {
  popupImage.open({ name, link });
};

function fillCurrentData() {
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.name;
  profileDescriptionInput.value = userData.description;
};


profileEdit.addEventListener('click', () => {
  editProfileFormValidator.resetValidation();
  fillCurrentData();
  popupProfile.open();
});

placeAdd.addEventListener('click', () => {
  editPlaceFormValidator.resetValidation();
  popupPlace.open();
});
