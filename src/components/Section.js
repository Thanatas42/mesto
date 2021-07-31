export default class Section {
  constructor(render, containerSelector) {
    this._render = render;
    this._container = document.querySelector(containerSelector);
  };

  addItem(item) {
    const htmlElement = this._render(item);
    this._container.prepend(htmlElement);
  };
};
