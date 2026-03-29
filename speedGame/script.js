// Bottone che avvia il gioco.
const staBut = document.querySelector("#start");

// Bottone che ferma il gioco.
const stoBut = document.querySelector("#stop");

// Elemento in cui mostriamo il tempo che scorre.
const ti3 = document.querySelector("#tit3");

// Momento di inizio del tentativo corrente.
let timesta;

// Momento in cui l'utente preme stop.
let timesto;

// Id restituito da setTimeout; serve per poter annullare il timeout.
let timeout;

// Id restituito da setInterval; serve per fermare l'aggiornamento continuo del timer.
let timerInterval;

// Queste variabili non servono piu alla logica attuale, ma le lascio perche erano gia presenti.
let clicked = false;
let decimi = 0;
let centesimi = 0;
let millesimi = 0;


staBut.addEventListener("click", () => {
    // Se l'utente preme start piu volte, eliminiamo eventuali timer rimasti attivi
    // dalla partita precedente per evitare conteggi doppi.
    clearTimeout(timeout);
    clearInterval(timerInterval);

    // Dopo 500 ms il giocatore perde se non ha ancora premuto stop.
    // setTimeout esegue il codice UNA SOLA VOLTA dopo il ritardo indicato.
    timeout = setTimeout(() => {
        // Se il tempo di gioco e finito, fermiamo anche l'aggiornamento del cronometro.
        clearInterval(timerInterval);

        // Resettiamo il testo mostrato nella pagina.
        ti3.textContent = "0.000";

        // Avviso di sconfitta.
        window.alert("You failed :( Retry!");
    }, 500);

    // Salviamo il timestamp di partenza in millisecondi.
    // Date.now() restituisce il numero di millisecondi trascorsi dal 1 gennaio 1970.
    timesta = Date.now();

    // setInterval esegue continuamente la funzione ogni tot millisecondi.
    // Qui aggiorniamo il tempo mostrato sullo schermo in modo continuo.
    timerInterval = setInterval(() => {
        // Millisecondi trascorsi dall'inizio del round.
        const elapsed = Date.now() - timesta;

        // Convertiamo in secondi e mostriamo sempre 3 cifre decimali.
        // Esempio: 0.004, 0.125, 0.500
        ti3.textContent = (elapsed / 1000).toFixed(3);
    }, 1); // intervallo di aggiornamento, non limite di azione
})

stoBut.addEventListener("click", () => {
    // Se l'utente ha premuto stop in tempo, il timeout non deve piu scattare.
    clearTimeout(timeout)

    // Fermiamo l'intervallo che stava aggiornando il cronometro sullo schermo.
    clearInterval(timerInterval)

    // Registriamo il momento finale del click su stop.
    timesto = Date.now();

    // Differenza tra fine e inizio in millisecondi.
    dif = timesto - timesta;

    // Conversione in secondi.
    dif /= 1000;

    // Reset della scritta nell'interfaccia dopo il click.
    ti3.textContent = "0.000"

    // Mostriamo all'utente il tempo impiegato con precisione di 3 decimali.
    window.alert(`You won! It took you ${dif.toFixed(3)} seconds!`)
})