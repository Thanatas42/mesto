export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
  };

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent
    };
  };

  setUserInfo({ newNameValue, newDescriptionValue }) {
    this._name.textContent = newNameValue;
    this._description.textContent = newDescriptionValue;
  };
};
