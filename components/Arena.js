class Arena {
  constructor(containerSelector) {
    //this._players = players;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(containerSelector);
    this._topicText = this._container.querySelector(".arena__topic");
    this._topicInstructions =
      this._container.querySelector(".arena__topic-span");
    this._playerOneText = this._container.querySelector(".arena__player-one");
    this._playerTwoText = this._container.querySelector(".arena__player-two");
    this._playerOneInstructions = this._container.querySelector(
      ".arena__player-one-span"
    );
    this._playerTwoInstructions = this._container.querySelector(
      ".arena__player-two-span"
    );
    this._playerOneButton = this._container.querySelector(
      ".arena__select-player-one"
    );
    this._playerTwoButton = this._container.querySelector(
      ".arena__select-player-two"
    );
  }

  _setEventListeners() {
    this._playerOneButton.addEventListener("click", () => {
      this.makeOneVictor();
    });
    this._playerTwoButton.addEventListener("click", () => {
      this.makeTwoVictor;
    });
  }

  /*
  _displayInstructions() {
    if (this._topicText === "") {
      this._topicInstructions.textContent = "Select Topic.";
    }
    if (this._playerOneText === "") {
      this._playerOneInstructions.textContent = "Select Player One.";
    }
    if (this._playerTwoText === "") {
      this._playerTwoInstructions.textContent = "Select Player Two.";
    }
  } 
  */

  updatePlayerOne(event) {
    this._playerOneText.textContent = event.target.textContent;
    this._playerOneButton.textContent = event.target.textContent;
  }

  updatePlayerTwo(event) {
    this._playerTwoText.textContent = event.target.textContent;
    this._playerTwoButton.textContent = event.target.textContent;
  }

  makeOneVictor() {
    console.log("one");
    return `${this._playerOneText.textContent} -- ${this._playerTwoText.textContent} | Winner: ${this._playerOneText.textContent}`;
  }
  makeTwoVictor() {
    return `${this._playerOneText.textContent} -- ${this._playerTwoText.textContent} | Winner: ${this._playerTwoText.textContent}`;
  }

  resetArena() {
    this._topicInstructions.textContent = "";
    this._playerOneInstructions.textContent = "";
    this._playerTwoInstructions.textContent = "";
  }

  startGame() {
    //this._displayInstructions();
    //this._setEventListeners();
  }
}

export { Arena };
