let editProfile = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile-info__edit-button');
let saveButton = document.querySelector('.popup__save-button')
let formName = document.querySelector('.profile-info__name');
let formSubname = document.querySelector('.profile-info__subname');
let setName = document.querySelector('.popup__text_name');
let setSubname = document.querySelector('.popup__text_subname');
/*хотел привязать на классы а не имена импутов, просто там однотипные элементы
соответсвенно имеют один класс, можно привязать по id, так наверно правильнее*/


function showForm() {
  setName.value = formName.textContent;
  setSubname.value = formSubname.textContent;
  editProfile.classList.toggle('popup_opened');
}

function closeForm() {
  editProfile.classList.toggle('popup_opened');
}

function editForm() {
  formName.textContent = setName.value;
  formSubname.textContent = setSubname.value;
  editProfile.classList.toggle('popup_opened');
}

editButton.addEventListener('click', showForm);
closeButton.addEventListener('click', closeForm);
saveButton.addEventListener('click', editForm);

console.log(editProfile.classList);
console.log(formSubname.textContent);
