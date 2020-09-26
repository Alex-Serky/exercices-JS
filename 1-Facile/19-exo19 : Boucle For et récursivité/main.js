var readline = require("readline-sync");
var saisie = parseInt(readline.question("Factorielle : "));
var resultat = 1;

for (let i = 1; i <= saisie; i++) {
    resultat *= i;
    console.log("Etape " + i + " : " + resultat);
}

console.log("Le résultat de la factorielle de " + saisie + " est " + resultat);

console.log("-------------------------2ème Méthode ---------------------");

var saisie = parseInt(readline.question("Factorielle : "));
var resultat = factorielle(saisie);


function factorielle(n){
       //  7! = 7*6*5*4*3*2*1
       if (n > 1) {
           return n * factorielle(n-1);
       }else{
           return 1;
       }
}

console.log("Le résultat de la factorielle de " + saisie + " est " + resultat);