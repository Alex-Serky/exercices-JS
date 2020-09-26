const monButton = document.querySelector("button");
const divResultat = document.querySelector("div");

monButton.addEventListener("click", function(){
    var txt = "";
    for (var i = 1; i <= 10; i++) {
        txt += "8 * " + i + " = " + (8 * i) + "<br />";
    }
    divResultat.innerHTML = txt;
});