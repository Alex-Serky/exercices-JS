var readline = require("readline-sync");

var askChiffre = parseInt(readline.question("Quel est le nombre voulez-vous saisir ? "));
var fin = false;

while (!fin) {
    if (isNaN(askChiffre)) {
      console.log("Veuillez recommencer la saisie, vous devez saisir un nombre");
     
        askChiffre = parseInt(readline.question("Quel est le nombre voulez-vous saisir ? "));
    }else{
        console.log("Le chiffre saisi est : " + askChiffre);
        fin = true;
    }
    
}