const editProfile = document.querySelector('.popup_edit-profile');
const addCard = document.querySelector('.popup_add-card');
const closeEditButton = document.querySelector('.popup_edit_close');
const showEditButton = document.querySelector('.profile-info__edit-button');
const saveEditButton = document.querySelector('.popup_edit_save');
const addCardButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup_add_close');
const saveAddButton = document.querySelector('.popup__save-button');
const addSaveButton = document.querySelector('.popup_add_save');
let formName = document.querySelector('.profile-info__name');
let formSubname = document.querySelector('.profile-info__subname');
let setName = document.querySelector('.popup__text_name');
let setSubname = document.querySelector('.popup__text_subname');
const cards = document.querySelector('.cards');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function showFormEditProfile() {
  editProfile.classList.toggle('popup_opened');
}

function showFormAddCard() {
  addCard.classList.toggle('popup_opened');
}

function editForm() {
  formName.textContent = setName.value;
  formSubname.textContent = setSubname.value;
  editProfile.classList.toggle('popup_opened');
}

function createCard (link, name, alt) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').alt = alt
  cardElement.querySelector('.card__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like-button_theme_active');
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt) {
    cardElement.remove();
  });

  const viewpopup = document.querySelector(".show_popup_view");
  cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    const viewpopup = document.querySelector(".show_popup_view");
    viewpopup.classList.toggle('popup_opened');
    const src = evt.target.getAttribute('src');
    viewpopup.querySelector('.popup__image').setAttribute('src', src);
    viewpopup.querySelector('.popup__figure-name').textContent = alt;
    viewpopup.querySelector('.popup_view_close');
  });
  if (link !== 'Ссылка на картинку' && name !== 'Название') {
    cards.append(cardElement);
    showFormAddCard();
  }
  else {alert("Введите название и адрес карточки")};
}
document.querySelector('.popup_view_close').addEventListener('click', () => {
  document.querySelector(".show_popup_view").classList.toggle('popup_opened');
});

showEditButton.addEventListener('click', showFormEditProfile);
closeEditButton.addEventListener('click', showFormEditProfile);
saveEditButton.addEventListener('click', editForm);
addCardButton.addEventListener('click', showFormAddCard);
closeAddButton.addEventListener('click', showFormAddCard);
addSaveButton.addEventListener('click', () => {
  const name = document.querySelector('.popup__post-name');
  const link = document.querySelector('.popup__post-subname');
  createCard(link.value, name.value);
});

initialCards.forEach (function (item) {
  createCard(item.link, item.name, item.name);
});

const name = document.querySelector('.popup__post-name');
const link = document.querySelector('.popup__post-subname');

