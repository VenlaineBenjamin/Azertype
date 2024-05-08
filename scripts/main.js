/*********************************************************************************
 *
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu.
 *
 *********************************************************************************/

const inputEcriture = document.getElementById("inputEcriture");
const btnValiderMot = document.getElementById("btnValiderMot");

const zoneProposition = document.querySelector(".zoneProposition");
const zoneScore = document.querySelector(".zoneScore span");

const optionSource = document.querySelectorAll(".optionSource input");

console.log(inputEcriture);
console.log(btnValiderMot);

console.log(zoneProposition);
console.log(zoneScore);

console.log(optionSource);

lancerJeu();
