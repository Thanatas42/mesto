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
const viewpopup = document.querySelector(".popup_type_show-image");
const name = document.querySelector('.popup__post-name');
const link = document.querySelector('.popup__post-subname');
const profileName = document.querySelector('.profile-info__name');
const profileSubName = document.querySelector('.profile-info__subname');
const popupTextName = document.querySelector('.popup__text_name');
const popupTextSubName = document.querySelector('.popup__text_subname');
const popupImage = document.querySelector('.popup__image');
const popupFigureName = document.querySelector('.popup__figure-name');
const closeButtonView = document.querySelector('.popup__close-button_view');

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function editForm() {
  profileName.textContent = popupTextName.value;
  profileSubName.textContent = popupTextSubName.value;
  togglePopup(editProfile);
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
    togglePopup(viewpopup);
    popupImage.src = evt.target.getAttribute('src');
    popupFigureName.textContent = name;
  });
  return cardElement
}


closeButtonView.addEventListener('click', () => {
  togglePopup(viewpopup);
});

showEditButton.addEventListener('click', () => {
  togglePopup(editProfile);
  popupTextName.value = profileName.textContent;
  popupTextSubName.value = profileSubName.textContent;
});
closeEditButton.addEventListener('click', () => {
  togglePopup(editProfile);
});
saveEditButton.addEventListener('submit', editForm);
addCardButton.addEventListener('click', () => {
  togglePopup(addCard);
});
closeAddButton.addEventListener('click', () => {
  togglePopup(addCard);
});

addSaveButton.addEventListener('submit', () => {
  cards.prepend(createCard(link.value, name.value));
  togglePopup(addCard);
});

initialCards.forEach (function (item) {
  cards.append(createCard(item.link, item.name));
});

