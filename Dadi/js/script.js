const playerButton = document.getElementById("player_button");

playerButton.addEventListener("click", function() {
 
  
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// numero random giocatore
let playerNumber = Math.floor(Math.random() * 6) + 1;
// numero random pc
let pcNumber = Math.floor(Math.random() * 6) + 1;
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let result ;
if(playerNumber>pcNumber){
  result="win";
}else if(playerNumber<pcNumber){
  result="lose";
}else{
  result="draw";
}
// Genera messaggio vittoria o sconfitta
console.log("Numero del giocatore:",playerNumber);
console.log("Numero del PC:", pcNumber);
console.log(result);
});