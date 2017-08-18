alert ("Bienvenue à vous.");
var number = parseInt( prompt("Veuillez entrer un nombre de votre choix.") ) ;

var i = 1, somme = 0 ;
while (i <= number)
  {
   somme += i ;
   i = i+1 ;
  }

alert ("La somme des nombres de 1 à " + number + " est " + somme + ".") ;