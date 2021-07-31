const config = {
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
};
//Изучаю в данный момент серию книг "Вы не знаете JS"
//Автор говорит что константы по соглашению разработчиков обьявляются вроде такого
//  const PROFILE_EDIT = ..., насколько распространено в вашей практике?
const profileEdit = document.querySelector(".profile-info__edit-button");
const placeAdd = document.querySelector(".profile__add-button");

const profileNameInput = document.querySelector("#name-profile");
const profileDescriptionInput = document.querySelector("#description-profile");

const profileAvatar = document.querySelector(".profile__image");
const profileAvatarClick = document.querySelector(".profile__avatar");

export {
  config,
  profileEdit,
  placeAdd,
  profileNameInput,
  profileDescriptionInput,
  profileAvatar,
  profileAvatarClick,
};

//PS Очень тяжелая работа, я уже сам не до конца понимаю что и куда идет в моем проекте
// добавлено очень много лишнего в html, постарался почистить, уже нет времени доводить до идеала
// чуть чуть помогали)
