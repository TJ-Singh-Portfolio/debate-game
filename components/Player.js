class Player {
  constructor(data, playerSelector, handlePlayerClick) {
    this._data = data;
    this._playerSelector = playerSelector;
    this._handlePlayerClick = handlePlayerClick;
  }

  _setEventListeners() {
    this._element.addEventListener("click", (event) => {
      this._handlePlayerClick(event);
    });
  }

  _getPlayerData() {
    const playerTemplate = document.querySelector(this._playerSelector);
    const playerElement = playerTemplate.content
      .cloneNode(true)
      .querySelector(".players__item");

    return playerElement;
  }

  generatePlayer() {
    this._element = this._getPlayerData();
    this._element.textContent = this._data;
    this._setEventListeners();
    return this._element;
  }
}

export { Player };
