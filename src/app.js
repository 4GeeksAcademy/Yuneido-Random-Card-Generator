/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const SHAPES = ["♦", "♥", "♠", "♣"];

const randomShape = (arr) => {
  const index = getRandomIndex(arr.length);
  return arr[index];
};

function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

window.onload = function() {
  //write your code here
  document
    .getElementById("generatorButton")
    .addEventListener("click", generateCard);
  generateCard();

  let segundos = 10;

  const contador = setInterval(() => {
    document.getElementById("temporizador").innerText = segundos;

    segundos--;

    if (segundos < 0) {
      generateCard();
      segundos = 10;
    }
  }, 1000);
};

function getCardValue() {
  const num = Math.floor(Math.random() * 13) + 1;
  switch (num) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return num;
  }
}

function generateCard() {
  document.getElementById("valor").innerText = getCardValue();
  let divFiguras = document.querySelectorAll(".figura");
  let figuraRandom = randomShape(SHAPES);

  divFiguras.forEach((fig) => {
    fig.innerText = figuraRandom;
    fig.style.color = SHAPES.indexOf(figuraRandom) < 2 ? "red" : "black";
  });
}
