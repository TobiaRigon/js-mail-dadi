
// definisci una lista mail
const mailList = [
  "marco@mail.it",
  "sara@mail.it",
  "luca@mail.it",
  "giulia@mail.it",
  "paolo@mail.it",
  "anna@mail.it",
  "andrea@mail.it",
  "eleonora@mail.it",
  "giovanni@mail.it",
  "valentina@mail.it"
];

const sendButton = document.getElementById("send_button");
let accessoAutorizzato;
let mailUser;

// al click
sendButton.addEventListener("click", function() {
  // Chiedi all’utente la sua email
  let mailUser = document.getElementById("mail_user").value;
  accessoAutorizzato = false;
  // per ogni elemento della lista
  for (let i = 0; i < mailList.length; i++) {
    // controlla che sia nella lista di chi può accedere
    if (mailUser === mailList[i]) {
      accessoAutorizzato = true;
      break;
    }
  }

  // stampa un messaggio appropriato sull’esito del controllo
  console.log(accessoAutorizzato);

  // Verifica l'accesso autorizzato e stampa un messaggio
  let message;
  if (accessoAutorizzato) {
    message = "Benvenuto!";
  } else {
    message = "Accesso negato";
  }

  document.getElementById("message").innerHTML = message;
});