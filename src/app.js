/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const SHAPES = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  //write your code here
  document
    .getElementById("generatorButton")
    .addEventListener("click", generateCard);
  generateCard();
  console.log("Hello Rigo from the console!");
};

const randomShape = arr => {
  return arr[getCardValueOrShapeIndex(arr.length)];
};

function getCardValueOrShapeIndex(length = 13) {
  if (length === 4) return Math.floor(Math.random() * length);
  let num = Math.floor(Math.random() * length) + 1;
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
  document.getElementById("valor").innerText = getCardValueOrShapeIndex();
  let divFiguras = document.querySelectorAll(".figura");
  let figuraRandom = randomShape(SHAPES);

  divFiguras.forEach(fig => {
    fig.innerText = figuraRandom;
    fig.style.color = SHAPES.indexOf(figuraRandom) < 2 ? "red" : "black";
  });
}

let segundos = 10;

const contador = setInterval(() => {
  document.getElementById("temporizador").innerText = segundos;

  segundos--;

  if (segundos < 0) {
    generateCard();
    segundos = 10;
  }
}, 1000);
