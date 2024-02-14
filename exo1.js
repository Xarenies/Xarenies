function compterEnBinaire(x) {
    if(x == 0)
        return "0"

    let diviseur = 2
    let binaire = ""
    let valeur = x
    while (valeur > 1) {
        let R = valeur % diviseur
        valeur = (valeur - R) / diviseur
        binaire = R.toString() + binaire
    }

    return 1 + binaire

}
function compterEnBinaire2(nombre) {
    if (nombre === 0) {
      return "0";
    }
  
    let binaire = "";
    while (nombre > 0) {
      // Prenez le reste de la division par 2 et ajoutez-le à la gauche de la chaîne binaire
      binaire = (nombre % 2) + binaire;
      // Divisez le nombre par 2 (arrondi vers le bas)
      nombre = Math.floor(nombre / 2);
    }
  
    return binaire;
  }


console.log(compterEnBinaire(5)) // doit retourner "101"
console.log(compterEnBinaire(10)) // doit retourner "1010"
console.log(compterEnBinaire(0))
console.log(compterEnBinaire(1))


