var voiture = {
    immatriculation : "AB1234CD",
    marque : "Toyota",
    annee : 2002,
    carac : {
        nbKilometre : 662000,
        couleur : "blanche",
        puissance : 7
    }
};

console.log(`La voiture d'immatriculation ${voiture.immatriculation}, de marque ${voiture.marque}, date de ${voiture.annee},
le nombre de kilomètre est ${voiture.carac.nbKilometre},
de couleur ${voiture.carac.couleur} et de puissance ${voiture.carac.puissance}`);

