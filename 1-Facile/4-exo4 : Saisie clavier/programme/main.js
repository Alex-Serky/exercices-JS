var readline = require("readline-sync");

var nom = readline.question(" Quel est votre nom ? ");
var prenom = readline.question(" Quel est votre prénom ? ");
var age = parseInt(readline.question(" Quel est votre âge ? "));

var txt = "------------------------------------------\n";
txt += "---------------BIENVENUE-----------------\n";
txt += "------------------------------------------\n";

txt += "Votre nom est : " + nom + "\n";
txt += "Votre prénom est : " + prenom + "\n";
txt += "Votre âge est : " + age + "\n";

console.log(txt);