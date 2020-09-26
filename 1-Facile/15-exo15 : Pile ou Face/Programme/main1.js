$("button").on("click", function(){
    $("div").html(pileOuFace());
});


function pileOuFace() {
    var random = Math.floor(Math.random() * 2);
    if(random >= 1) return "Face";
    else return "Pile";

    // Ou par la ternaire
    // return (random >= 1) ? "Face" : "Pile";
}