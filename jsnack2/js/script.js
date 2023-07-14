"use strict"
/*
Snack 2
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso 
mentre l’altro di verde. Partendo da un array di numeri, 
stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

// array numeri dispari
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const divRed = document.getElementById("text-red");
const divGreen = document.getElementById("text-green");

// for (let i = 0; i < numbersArray.length; i++) {
//   const number = numbersArray[i];
//   if (number % 2 === 0) {
//     divGreen.innerHTML += number;
//     divGreen = classlist.add(["text-success"]);
//   } else {
//     divRed.innerHTML += number;
//     divRed = classlist.add(["text-danger"]);
//   }
// }

// divRosso.style.color = "red";
// divVerde.style.color = "green";
