// Imports
import { Topic } from "../components/Topic.js";
import { Player } from "../components/Player.js";
import { Arena } from "../components/Arena.js";
import { History } from "../components/History.js";

// Topics Variables
const topicsContainer = document.querySelector(".topics__list");
const topicSelector = "#topic-item";

// Players Variables
const playersContainer = document.querySelector(".players__list");
const playerSelector = "#player-item";

//Arena Variables
const gameStartButton = document.querySelector(".players__button");
const arenaContainerSelector = ".arena__container";
const arenaContainer = document.querySelector(arenaContainerSelector);
const arenaTopic = arenaContainer.querySelector(".arena__topic");
const arenaPlayerOne = arenaContainer.querySelector(".arena__player-one");
const arenaPlayerTwo = arenaContainer.querySelector(".arena__player-two");
const arenaPlayerOneButton = arenaContainer.querySelector(
  ".arena__select-player-one"
);
const arenaPlayerTwoButton = arenaContainer.querySelector(
  ".arena__select-player-two"
);

// Forms Variables
const forms = document.forms;
const topicForm = forms["topic-form"];
const playerForm = forms["player-form"];
const topicInput = document.querySelector(".forms__input-topic");
const playerInput = document.querySelector(".forms__input-player");
const topicButton = topicForm.querySelector(".forms__button");
const playerButton = playerForm.querySelector(".forms__button");

//Timer Variables
const thirtySecondTimer = document.querySelector(
  ".timers__instance-thirty-seconds"
);
const twoMinuteTimer = document.querySelector(".timers__instance-two-minutes");
const thirtySecondButton = thirtySecondTimer.querySelector(".timers__button");
const twoMinuteButton = twoMinuteTimer.querySelector(".timers__button");
const thirtySecondText = thirtySecondTimer.querySelector(".timers__text");
const twoMinuteText = twoMinuteTimer.querySelector(".timers__text");

// History Variables
const historyContainerSelector = ".history__container";
const historyList = document.querySelector(".history__list");
const historySelector = "#history-item";

// Arrays, Collections, and Objects
const playersArray = [];

// Logic
topicForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  generateTopic(topicInput.value);
  topicForm.reset();
});
playerForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  generatePlayer(playerInput.value);
  playersArray.push(playerInput.value);
  playerForm.reset();
});

const handleTopicClick = (event) => {
  arenaTopic.textContent = event.target.textContent;
  //console.log("Add this later.");
};

const handlePlayerClick = (event) => {
  arenaPlayerOne.textContent === "Select Player One"
    ? gameArena.updatePlayerOne(event)
    : gameArena.updatePlayerTwo(event);
  //console.log("Add this later.");
};

const generateTopic = (data) => {
  const topicObject = new Topic(data, topicSelector, handleTopicClick);
  const topic = topicObject.generateTopic();
  topicsContainer.append(topic);
};

const generatePlayer = (data) => {
  const playerObject = new Player(data, playerSelector, handlePlayerClick);
  const player = playerObject.generatePlayer();
  playersContainer.append(player);
};

const gameArena = new Arena(arenaContainerSelector);

//gameStartButton.addEventListener("click", gameArena.startGame());

const historyObject = new History(historyContainerSelector, historySelector);

arenaPlayerOneButton.addEventListener("click", () => {
  historyList.append(historyObject.generateEntry(gameArena.makeOneVictor()));
});

arenaPlayerTwoButton.addEventListener("click", () => {
  historyList.append(historyObject.generateEntry(gameArena.makeTwoVictor()));
});

const setThirtySecondTimer = () => {
  let counter = 30;
  let interval = setInterval(() => {
    if (counter > 0) {
      thirtySecondText.textContent = counter;
      counter = counter - 1;
    }
    if (counter === 0) {
      clearInterval(interval);
      thirtySecondText.textContent = "0:30";
    }
  }, 1000);
};

const setTwoMinuteTimer = () => {
  let counter = 120;
  let counterMinutes;
  let counterSeconds;
  let interval = setInterval(() => {
    if (counter > 0) {
      counterSeconds = counter % 60;
      counterMinutes = Math.floor(counter / 60);
      twoMinuteText.textContent = `${counterMinutes}:${counterSeconds}`;
      counter = counter - 1;
      counterSeconds = counter % 60;
    }
    if (counter === 0) {
      clearInterval(interval);
      twoMinuteText.textContent = "2:00";
    }
  }, 1000);
};

thirtySecondButton.addEventListener("click", setThirtySecondTimer);

twoMinuteButton.addEventListener("click", setTwoMinuteTimer);

// Debugging Space
//Create a Section class.
console.log(playersArray);
//console.log(arena);
