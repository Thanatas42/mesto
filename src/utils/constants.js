import baikalImage from '../images/places/baikal.jpg';
import arhyzImage from '../images/places/karach-cherkes.jpg';
import bashkiriaImage from '../images/places/bashkiria.jpg';
import dombayImage from '../images/places/dombay.jpg';
import elbrusImage from '../images/places/elbrus.jpg';
import krasnodarImage from '../images/places/krasnodar.jpg';

const initialCards = [
  {
    name: 'Архыз',
    link: arhyzImage
  },
  {
    name: 'Башкирия',
    link: bashkiriaImage
  },
  {
    name: 'Иваново',
    link: dombayImage
  },
  {
    name: 'Эльбрус',
    link: elbrusImage
  },
  {
    name: 'Краснодар',
    link: krasnodarImage
  },
  {
    name: 'Байкал',
    link: baikalImage
  }
];

const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

const profileEdit = document.querySelector('.profile-info__edit-button');
const placeAdd = document.querySelector('.profile__add-button')

const profileNameInput = document.querySelector('#name-profile');
const profileDescriptionInput = document.querySelector('#description-profile');

export {
  initialCards,
  config,
  profileEdit,
  placeAdd,
  profileNameInput,
  profileDescriptionInput,
};
