const playerButton = document.getElementById("player_button");

playerButton.addEventListener("click", function() {
  // Genera un numero casuale da 1 a 6 per il giocatore e il computer
  const playerNumber = Math.floor(Math.random() * 6) + 1;
  const pcNumber = Math.floor(Math.random() * 6) + 1;

  // Determina il vincitore in base al punteggio più alto
  let result;
  if (playerNumber > pcNumber) {
    result = "won";
  } else if (playerNumber < pcNumber) {
    result = "lost";
  } else {
    result = "drew";
  }

  // Visualizza i risultati nella console
  console.log("Numero del giocatore:", playerNumber);
  console.log("Numero del PC:", pcNumber);
  console.log(result);

 // Aggiorna l'HTML con i risultati e imposta il colore del testo
const playerResultElement = document.getElementById("player_result");
const pcResultElement = document.getElementById("pc_result");
const messageElement = document.getElementById("message");

playerResultElement.innerHTML = `Your result is: ${playerNumber}`;
pcResultElement.innerHTML = `PC result is: ${pcNumber}`;
messageElement.innerHTML = `You ${result}!`;

// Imposta il colore del testo in base al risultato
if (result === "won") {
  messageElement.style.color = "green";
} else if (result === "lost") {
  messageElement.style.color = "red";
} else {
  // Se è un pareggio, puoi impostare il colore a un valore predefinito o cambiarlo a tuo piacimento
  messageElement.style.color = "blue";
}
});
