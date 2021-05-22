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
const viewpopup = document.querySelector('.popup_type_show-image');
const name = document.querySelector('.popup__post-name');
const link = document.querySelector('.popup__post-subname');
const profileName = document.querySelector('.profile-info__name');
const profileSubName = document.querySelector('.profile-info__subname');
const popupTextName = document.querySelector('.popup__text_name');
const popupTextSubName = document.querySelector('.popup__text_subname');
const popupImage = document.querySelector('.popup__image');
const popupFigureName = document.querySelector('.popup__figure-name');
const closeButtonView = document.querySelector('.popup__close-button_view');
const popup = document.querySelectorAll('.popup');
const popupAdd = document.querySelector('.popup__save-button_add');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeListenersoff();
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  setListenersoff();
}

function editForm() {
  profileName.textContent = popupTextName.value;
  profileSubName.textContent = popupTextSubName.value;
  closePopup(editProfile);
}


function createCard(link, name) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_theme_active');
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    cardElement.remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', function (evt) {
    openPopup(viewpopup);
    popupImage.src = evt.target.getAttribute('src');
    popupFigureName.textContent = name;
  });
  return cardElement
}

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
  cards.prepend(createCard(link.value, name.value));
  closePopup(addCard);
  link.value = "";
  name.value = "";
  popupAdd.disabled = true;
});

function setListenersoff() {
  popup.forEach((popup) => {
    document.addEventListener('keydown', (evt) => {
      if (evt.code === 'Escape' || evt.code === 27) {
        closePopup(popup);
        /*Вешал листенер на попап как ниже, не работает, повесил на документ целиком, проверка на кей код в попытках почнить*/
      };
    });
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(popup);
      }
    });
  });
}

function removeListenersoff() {
  popup.forEach((popup) => {
    document.removeEventListener('keydown', (evt) => {
      if (evt.code === 'Escape' || evt.code === 27) {
        closePopup(popup);
      };
    });
    popup.removeEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(popup);
      }
    });
  });
}

initialCards.forEach(function (item) {
  cards.append(createCard(item.link, item.name));
});

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(config);
