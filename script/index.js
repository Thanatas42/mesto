const editProfile = document.querySelector('.popup_type_edit-form');
const addCard = document.querySelector('.popup_type_add-card');
const closeEditButton = document.querySelector('.popup__close-button_edit');
const showEditButton = document.querySelector('.profile-info__edit-button');
const saveEditButton = document.querySelector('.popup__container_type_edit-form');
const addCardButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-button_add');
const addSaveButton = document.querySelector('.popup__container_type_add-card');
const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;
const viewpopup = document.querySelector(".popup_view");
const name = document.querySelector('.popup__post-name');
const link = document.querySelector('.popup__post-subname');

function openPopup(popup) {
  popup.classList.toggle('popup_opened');
}

function editForm() {
  document.querySelector('.profile-info__name').textContent = document.querySelector('.popup__text_name').value;
  document.querySelector('.profile-info__subname').textContent = document.querySelector('.popup__text_subname').value;
  openPopup(editProfile);
}


function createCard (link, name) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like-button_theme_active');
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt) {
    cardElement.remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', function(evt) {
    openPopup(viewpopup);
    const src = evt.target.getAttribute('src');
    viewpopup.querySelector('.popup__image').src = src;
    viewpopup.querySelector('.popup__figure-name').textContent = name;
  });
  return cardElement
}


document.querySelector('.popup__close-button_view').addEventListener('click', () => {
  openPopup(viewpopup);
});

showEditButton.addEventListener('click', () => {
  openPopup(editProfile);
  document.querySelector('.popup__text_name').value = document.querySelector('.profile-info__name').textContent;
  document.querySelector('.popup__text_subname').value = document.querySelector('.profile-info__subname').textContent;
});
closeEditButton.addEventListener('click', () => {
  openPopup(editProfile);
});
saveEditButton.addEventListener('submit', editForm);
addCardButton.addEventListener('click', () => {
  openPopup(addCard);
  document.querySelector('.popup__post-name').value = 'Название';
  document.querySelector('.popup__post-subname').value = 'Ссылка на картинку';
  /*согласно макету так или иначе в инпуте должна быть строка Название и Ссылка на картинку*/
});
closeAddButton.addEventListener('click', () => {
  openPopup(addCard);
});

addSaveButton.addEventListener('submit', () => {
  cards.prepend(createCard(link.value, name.value));
  openPopup(addCard);
});

initialCards.forEach (function (item) {
  cards.append(createCard(item.link, item.name));
});

