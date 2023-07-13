"use strict"
/*
Snack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e 
a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

// creo un array vuoto
let numbersArray = [];

let sumNumbers = 0;

// creo un ciclo che chiede numeri all'utente fintanto che la somma è minore di 50
while (sumNumbers < 50){
  let userPrompt = prompt("Il numero che vuoi inserire nella lista è: ");
  userPrompt = parseInt(userPrompt);
  numbersArray.push(userPrompt); // pusho gli elementi nell'array vuoto
  sumNumbers += userPrompt; // imposto la somma
}

console.log("Il nuovo array è " + numbersArray);
console.log("La somma degli elementi dell'array è " + sumNumbers);


