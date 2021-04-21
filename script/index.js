let editProfile = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile-info__edit-button');
let saveButton = document.querySelector('.popup__save-button')
let formName = document.querySelector('.profile-info__name');
let formSubname = document.querySelector('.profile-info__subname');
let setName = document.querySelector('input[name="name"]');
let setSubname = document.querySelector('input[name="subname"]');
/*хотел привязать на классы а не имена импутов, просто там однотипные элементы
соответсвенно имеют один класс, можно привязать по id, так наверно правильнее*/


function showForm() {
  setName.value = formName.textContent;
  setSubname.value = formSubname.textContent;
  editProfile.classList.toggle('popup_opened');
  /*Я переделал реализацию, но в принципе при закрытии попап функция как и при открытии просто
  подставляла в инпуты значения полей name и subname с профиля, значения ровно те же которые и были
  при открытии формы, то есть пользователь эти изменения бы даже не увидел, форма закрылась - значения те
  которые были при открытии НО если вдруг иные(ну вдруг как нибудь) на момент закрытия - пользователь их не увидит
  а при открытии подставятся опять нужные значения, просто реализация меньшим количеством кода)*/
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
