
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// numero random giocatore
let PlayerNumber;
// numero random pc
let pcNumber;
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let result ;
if(PlayerNumber>pcNumber){
  risultato="win";
}else if(PlayerNumber<pcNumber){
  result="lose";
}else{
  result="draw";
}
// Genera messaggio vittoria o sconfitta
console.log(result);