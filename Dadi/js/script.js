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

  // Aggiorna l'HTML con i risultati
  document.getElementById("player_result").innerHTML = `Your result is: ${playerNumber}`;
  document.getElementById("pc_result").innerHTML = `PC result is: ${pcNumber}`;
  document.getElementById("message").innerHTML = `You ${result}!`;
});
