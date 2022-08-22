const config = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
};

const profileEdit = document.querySelector(".profile-info__edit-button");
const placeAdd = document.querySelector(".profile__add-button");

const profileNameInput = document.querySelector("#name-profile");
const profileDescriptionInput = document.querySelector("#description-profile");

const profileAvatar = document.querySelector(".profile__image");
const profileAvatarClick = document.querySelector(".profile__avatar");

const connectionSettings = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-26",
  authorization: "c483081b-d4c0-4fb6-bbaf-bcea42b7e896",
}

export {
  config,
  profileEdit,
  placeAdd,
  profileNameInput,
  profileDescriptionInput,
  profileAvatar,
  profileAvatarClick,
  connectionSettings,
};
