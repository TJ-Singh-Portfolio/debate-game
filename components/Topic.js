class Topic {
  constructor(data, topicSelector, handleTopicClick) {
    this._data = data;
    this._topicSelector = topicSelector;
    this._handleTopicClick = handleTopicClick;
  }

  _setEventListeners() {
    this._element.addEventListener("click", (event) => {
      this._handleTopicClick(event);
    });
  }

  _getTopicData() {
    const topicTemplate = document.querySelector(this._topicSelector);
    const topicElement = topicTemplate.content
      .cloneNode(true)
      .querySelector(".topics__item");

    return topicElement;
  }

  generateTopic() {
    this._element = this._getTopicData();
    this._element.textContent = this._data;
    this._setEventListeners();
    return this._element;
  }
}

export { Topic };
