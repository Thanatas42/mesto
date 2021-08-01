export default class UserInfo {
  constructor({ nameSelector, subnameSelector, avatarSelector, idSelector }) {
    this._name = document.querySelector(nameSelector);
    this._subname = document.querySelector(subnameSelector);
    this._avatar = avatarSelector;
    this._id = idSelector;
  };

  getUserInfo() {
    return {
      name: this._name.textContent,
      subname: this._subname.textContent,
      avatar: this._avatar.src,
      id: this._id
    };
  };

  setUserInfo({ newNameValue, newSubnameValue, newAvatarValue, newIDvalue }) {
    this._name.textContent = newNameValue;
    this._subname.textContent = newSubnameValue;
    this._avatar.src = newAvatarValue;
    this._id = newIDvalue;
  };
};
