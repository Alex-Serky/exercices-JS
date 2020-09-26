var readline = require("readline-sync");

const PUISSANCE = 2;
var saisie = parseInt(readline.question("Puissance voulue ? "));

console.log(PUISSANCE + " à la puissance " + saisie +" = " + Math.pow(PUISSANCE,saisie));