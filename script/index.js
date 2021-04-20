let editProfile = document.querySelector('.form');
let closeButton = document.querySelector('.form__close-button');
let editButton = document.querySelector('.profile-info__edit-button');
let saveButton = document.querySelector('.form__save-button')
let formName = document.querySelector('span[id=name]');
let formSubname = document.querySelector('.profile-info__subname');
let setName = document.querySelector('input[name="name"]');
let setSubname = document.querySelector('input[name="subname"]');


function showForm() {
  setName.value = formName.textContent;
  setSubname.value = formSubname.textContent;
  editProfile.classList.toggle('form_show_inactive');
}

function editForm() {
  formName.innerText = setName.value;
  formSubname.innerText = setSubname.value;
  editProfile.classList.toggle('form_show_inactive');
}

editButton.addEventListener('click', showForm);
closeButton.addEventListener('click', showForm);
saveButton.addEventListener('click', editForm);
