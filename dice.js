// alert("Hello")
var randomDice1 = Math.floor(Math.random() * 6) + 1;
var numberDice1 = "/images/dice" + randomDice1 + '.png';
var randomDice2 = Math.floor(Math.random() * 6) + 1;
var numberDice2 = "/images/dice" + randomDice2 + '.png';

var dice1 = document.querySelectorAll('img')[0];
dice1.setAttribute("src", numberDice1)
// console.log(numberDice1);

var dice2 = document.querySelectorAll('img')[1];
dice2.setAttribute('src', numberDice2);

var result = document.querySelector('h1');

if (randomDice1 > randomDice2){
  result.textContent = "Player 1 Win";
} else if (randomDice1 < randomDice2){
  result.textContent = "Player 2 Win";
} else {
  result.textContent = "Draw";
}
