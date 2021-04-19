let editProfile = document.querySelector('.form');
let editButton = document.querySelector('.profile-info__edit-button');


function showForm() {
  editProfile.classList.toggle('form_show_inactive');
}

editButton.addEventListener('click', showForm);
