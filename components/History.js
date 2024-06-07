class History {
  constructor(containerSelector, templateSelector) {
    this._containerSelector = containerSelector;
    this._templateSelector = templateSelector;
    this._container = document.querySelector(containerSelector);
  }

  _getEntryData() {
    const historyTemplate = document.querySelector(this._templateSelector);
    const historyElement = historyTemplate.content
      .cloneNode(true)
      .querySelector(".history__entry");

    return historyElement;
  }

  generateEntry(data) {
    this._element = this._getEntryData();
    this._element.textContent = data;

    return this._element;
  }
}

export { History };
