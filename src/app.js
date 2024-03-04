/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El gato", "La oruga", "El vecino", "La IA"];
let action = ["corrompió", "inutilizó", "editó", "borró"];
let what = ["el Javascript", "el CSS", "el HTML"];
let when = [
  "de la web del cliente",
  "del ejercicio de clase",
  "mientras yo cocinaba",
  "porque no le ofrecí comida",
  "mientras dormía"
];

function generateExcuse() {
  let randomwho = who[Math.floor(Math.random() * who.length)];
  let randomaction = action[Math.floor(Math.random() * action.length)];
  let randomwhat = what[Math.floor(Math.random() * what.length)];
  let randomwhen = when[Math.floor(Math.random() * when.length)];

  return randomwho + " " + randomaction + " " + randomwhat + " " + randomwhen;
}

window.onload = function() {
  let excuse = generateExcuse();
  console.log(excuse);
  document.querySelector("#excuse").innerHTML = excuse;
};
