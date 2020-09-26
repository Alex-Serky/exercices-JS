var calculManager = {
    addition : function(nombre){
        var total = 0;
        for (var i = 1; i <= nombre; i++) {
            total += i;
            console.log("Etape : " + i + " total :" + total);
        }
        console.log("L'addition des n premiers nombres est " + total);
    },
    multiplication : function(nombre){
        var produit = 1;
        for (var j = 1; j <= nombre; j++) {
            produit *= j;
            console.log("Etape : " + j + " produit :" + produit);
        }
        console.log("La multiplication des n premiers nombres est " + produit);
    }
};

module.exports = calculManager;
