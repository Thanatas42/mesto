import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  profileNameInput,
  profileDescriptionInput,
  profileEdit,
  placeAdd,
  config,
  profileAvatar,
  profileAvatarClick,
} from "../utils/constants.js";
import "./index.css";
import PopupConfirm from "../components/PopupConfirm.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-26",
  headers: {
    authorization: "c483081b-d4c0-4fb6-bbaf-bcea42b7e896",
    "Content-Type": "application/json",
  },
});

let currentUserId = null;
const imageSection = new Section((card) => {
  const newCard = new Card(
    card,
    "#card",
    handleOpenImage,
    handleDeleteImageConfirmPopup,
    api,
    currentUserId
  );
  return newCard.generateCard();
}, ".cards");

const userInfo = new UserInfo({
  nameSelector: ".profile-info__name",
  subnameSelector: ".profile-info__subname",
});

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo({
      newNameValue: userData.name,
      newSubnameValue: userData.about,
    });
    profileAvatar.src = userData.avatar;
    currentUserId = userData._id;
    initialCards.forEach((item) => imageSection.addItem(item));
  })
  .catch((err) => {
    console.log(err);
  });

function handleProfileFormSubmit(formValues) {
  return api
    .updateUser({
      name: formValues["name-profile"],
      about: formValues["description-profile"],
    })
    .then((user) => {
      userInfo.setUserInfo({
        newNameValue: user.name,
        newSubnameValue: user.about,
      });
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err); //
    });
}

function handlePlaceFormSubmit(formValues) {
  const item = {
    name: formValues["name-place"],
    link: formValues["link"],
  };
  return api
    .createCard(item)
    .then((createdCard) => {
      imageSection.addItem(createdCard);
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}

function handleAvatarFormSubmit(formValues) {
  return api
    .updateAvatar({
      avatar: formValues["avatar-link"],
    })
    .then((user) => {
      profileAvatar.src = user.avatar;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}

const popupPlace = new PopupWithForm(
  handlePlaceFormSubmit,
  ".popup_type_add-card"
);
popupPlace.setEventListeners();
const popupProfile = new PopupWithForm(
  handleProfileFormSubmit,
  ".popup_type_edit-form"
);
popupProfile.setEventListeners();
const popupImage = new PopupWithImage(".popup_type_show-image");
popupImage.setEventListeners();
const popupConfirm = new PopupConfirm(".popup_type_confirm");
popupConfirm.setEventListeners();
const popupAvatar = new PopupWithForm(
  handleAvatarFormSubmit,
  ".popup_type_avatar"
);
popupAvatar.setEventListeners();
const editPlaceFormValidator = new FormValidator(config, popupPlace.popup);
editPlaceFormValidator.enableValidation();
const editProfileFormValidator = new FormValidator(config, popupProfile.popup);
editProfileFormValidator.enableValidation();
const editAvatarFormValidator = new FormValidator(config, popupAvatar.popup);
editAvatarFormValidator.enableValidation();

function handleOpenImage(name, link) {
  popupImage.open({ name, link });
}
function handleDeleteImageConfirmPopup(callback) {
  popupConfirm.open(callback);
}
function fillCurrentData() {
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.name;
  profileDescriptionInput.value = userData.subname;
}

profileEdit.addEventListener("click", () => {
  editProfileFormValidator.resetValidation();
  fillCurrentData();
  popupProfile.open();
});
placeAdd.addEventListener("click", () => {
  editPlaceFormValidator.resetValidation();
  popupPlace.open();
});
profileAvatarClick.addEventListener("click", () => {
  editAvatarFormValidator.resetValidation();
  popupAvatar.open();
});
