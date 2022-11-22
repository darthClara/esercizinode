// ESERCIZI DI NODE:

// ESERCIZIO 1:
// function somma(a = 0, b = 0) {
//    return a + b
// }
// console.log(somma(5, 6));

// ESERCIZIO 2:
// let crypto = require("crypto");
// const id = crypto.randomBytes(9).toString("hex")
// console.log("il tuo nickname generato randomicamente è: " + id)

// ESERCIZIO 3:
// CommonJS Module
// let funzioneImportata = require("./modulo1")
// console.log(funzioneImportata());

// ESERCIZIO 4:
// ECMAScript Module
import saluta from "./modulo2.mjs"
saluta("clara")
