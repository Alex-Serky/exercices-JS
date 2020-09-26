function afficherTaille(mot){
    if (mot.length < 8) {
        console.log("Le mot contient %d caractères ", mot.length );
        //console.log("Le mot contient " + mot.length + " caractères ");
        // console.log(`Le mot contient ${mot.length} caractères`);
    }else{
        console.log("Le mot possède plus de 8 caractères");
    }
}

var mot1 = "php";
var mot2 = "javascript";

afficherTaille(mot1);
afficherTaille(mot2);