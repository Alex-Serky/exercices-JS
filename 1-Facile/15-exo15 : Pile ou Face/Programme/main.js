const divResultat = document.querySelector("div");
const monButton = document.querySelector("button");

monButton.addEventListener("click", function(){
    divResultat.innerHTML = pileOuFace();
});

function pileOuFace(){
    var random = Math.floor(Math.random() * 2);
    // if(random >= 1) return "Face";
    // else return "Pile";

    // Ou par la ternaire
    return (random >=1) ? "Face" : "Pile";
}