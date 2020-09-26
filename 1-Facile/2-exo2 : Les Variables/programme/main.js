var nom = "toto";
var age = 30;
var homme = true;

console.log("Nom : " + nom);
console.log("Age : " + age);
if (homme) {
    console.log("Sexe : Homme");
}else{
    console.log("Sexe : Femme");
}

console.log("--------------------------------");

console.log("Nom : %s avec l'âge %d ans", nom, age);
if (!homme) {
    console.log("Sexe : Femme");
} else {
    console.log("Sexe : Homme");
}