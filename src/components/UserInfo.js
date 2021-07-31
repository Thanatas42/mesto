export default class UserInfo {
  constructor({ nameSelector, subnameSelector }) {
    this._name = document.querySelector(nameSelector);
    this._subname = document.querySelector(subnameSelector);
  };

  getUserInfo() {
    return {
      name: this._name.textContent,
      subname: this._subname.textContent,
    };
  };

  setUserInfo({ newNameValue, newSubnameValue }) {
    this._name.textContent = newNameValue;
    this._subname.textContent = newSubnameValue;
  };
};
