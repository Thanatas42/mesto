export default class Section {
  _items;
  _renderer;
  _container;

  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  renderItems() {
    this._items.forEach((item) => {
      const htmlElement = this._renderer(item);
      this._container.append(htmlElement);
    });
  };

  addItem(item) {
    const htmlElement = this._renderer(item);
    this._container.prepend(htmlElement);
  };
};
