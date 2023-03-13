/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".card").innerHTML = genRandNom();
  document.querySelector(".card").classList.add([genRanSuits()]);
};

function genRandNom() {
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let random = Math.floor(Math.random() * num.length);
  return num[random];
}
function genRanSuits() {
  let suits = ["spade", "clubs", "heart", "diamonds"];
  let random = Math.floor(Math.random() * suits.length);
  return suits[random];
}
