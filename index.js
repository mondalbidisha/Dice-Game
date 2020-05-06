
let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 generate random dice picture 
let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
let image1 = document.querySelectorAll("img")[0];
let buttonElement = document.querySelectorAll(".button")[0]; // Button to refresh page
image1.setAttribute("src", randomImageSource);
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
buttonElement.addEventListener("click", refreshPage);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} //If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} //If there is a Draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
function refreshPage() {
  location.reload();
}
