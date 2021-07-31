import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  };

  open(actionConfirmation) {
    super.open();
    this._actionConfirmation = actionConfirmation;
  };

  setEventListeners() {
    super.setEventListeners();
    const PoupButtonConfirm = this.popup.querySelector(".popup__save-button");
    PoupButtonConfirm.addEventListener("click", () => {
      this._actionConfirmation().then(() => { this.closePopup(); });
    });
  };
};
