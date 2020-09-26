var readline = require("readline-sync");

var saisie = parseInt(readline.question("Saisir le chiffre 3 : "));

do {
    console.log("Vous n'avez pas tapé le bon chiffre... ");
    saisie = parseInt(readline.question("Saisir le chiffre 3 : "));
} while (saisie !== 3);

console.log("Bravo!!! Vous avez saisi un 3");