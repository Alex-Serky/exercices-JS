var readline = require("readline-sync");

var personnage = {};

personnage.nom = readline.question("Quel est le nom ? ");
personnage.age = parseInt(readline.question("Quel âge ? "));

personnage.carac = {
    force : 7,
    agilite : 5,
    intel : 3
};

// Autre méthode
// personnage.carac = {};

// personnage.carac.force = 7;
// personnage.carac.agilite = 5;
// personnage.carac.intel = 3;

console.log(personnage);