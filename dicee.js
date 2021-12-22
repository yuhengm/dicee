var randNum1 = 1 + Math.floor(Math.random() * 6);
var randNum2 = 1 + Math.floor(Math.random() * 6);

var randImg1 = "images/dice" + randNum1 + ".png";
var randImg2 = "images/dice" + randNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randImg1);
document.querySelectorAll("img")[1].setAttribute("src", randImg2);

if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randNum1 < randNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
