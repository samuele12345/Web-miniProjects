// Seleziona l'elemento dove mostriamo il cronometro.
let textCron = document.querySelector("#tCron");
// Seleziona il pulsante Start.
let butS = document.querySelector("#buttonS");
// Seleziona il pulsante Pause.
let butP = document.querySelector("#buttonP");
// Seleziona il pulsante Reset (al momento non usato).
let butR = document.querySelector("#buttonR");
// Conterra l'id del setInterval per poterlo fermare.
let timeInt;
// Salva l'istante in cui hai premuto Start.
let startTime = 0;
// Somma totale del tempo passato in pausa.
let pausedTime = 0;
// Salva quando hai premuto Pause l'ultima volta.
let pauseStartedAt = 0;
// Indica se il cronometro e attualmente in pausa.
let st = false;

// Riceve i millisecondi trascorsi e restituisce una stringa formattata da mostrare.
function formatElapsed(elapsed) {
    // Ore intere contenute in elapsed.
    const contH = Math.floor(elapsed / 3600000)
    // Minuti residui dopo aver tolto le ore (% toglie la parte gia coperta dalle ore).
    const contMin = Math.floor((elapsed % 3600000) / 60000)
    // Secondi residui dopo aver tolto i minuti.
    const contSec = Math.floor((elapsed % 60000) / 1000)
    // Millisecondi residui (0-999).
    const contMs = elapsed % 1000

    // padStart garantisce sempre 2 cifre per ore, minuti e secondi (es: 03).
    const hh = String(contH).padStart(2, "0")
    const mm = String(contMin).padStart(2, "0")
    const ss = String(contSec).padStart(2, "0")
    // padStart garantisce sempre 3 cifre per i millisecondi (es: 007).
    const mmm = String(contMs).padStart(3, "0")

    // Se ci sono ore mostra tutto: ore:minuti:secondi.millisecondi.
    if (contH > 0) {
        return `${hh}:${mm}:${ss}.${mmm}`
    }

    // Se ci sono minuti ma non ore mostra: minuti:secondi.millisecondi.
    if (contMin > 0) {
        return `${mm}:${ss}.${mmm}`
    }

    // Altrimenti mostra solo: secondi.millisecondi.
    return `${ss}.${mmm}`
}

// Calcola il tempo effettivamente trascorso e aggiorna il testo nel DOM.
function updateCron() {
    // Sottraiamo startTime (inizio) e pausedTime (tot. millisecondi in pausa).
    const elapsed = Date.now() - startTime - pausedTime
    textCron.textContent = formatElapsed(elapsed)
}


// Quando clicchi Start, avviamo il cronometro.
butS.addEventListener("click", () =>{
    // Ferma un eventuale intervallo precedente per evitare doppio conteggio.
    clearInterval(timeInt)
    // Riparte da zero e azzera l'eventuale pausa precedente.
    startTime = Date.now()
    pausedTime = 0
    pauseStartedAt = 0
    st = false

    // Mostra subito il valore iniziale e poi aggiorna il display.
    updateCron()
    timeInt = setInterval(updateCron, 10)

    
});

// Quando clicchi Pause, metti in pausa o fai ripartire il cronometro.
butP.addEventListener("click", () =>{
    // Se non e ancora partito ignora il click.
    if (startTime === 0) {
        return
    }

    if (st) {
        // Siamo in pausa: l'utente vuole riprendere.
        butP.textContent = "Pause";
        // Calcola quanto ha durato questa pausa e la aggiunge al totale.
        pausedTime += Date.now() - pauseStartedAt
        // Azzera il marcatore di inizio pausa, non serve piu.
        pauseStartedAt = 0
        // Segna che il cronometro e di nuovo in moto.
        st = false
        // Aggiorna subito il display prima che parta il prossimo tick.
        updateCron()
        // Riprende l'aggiornamento ogni 10 ms.
        timeInt = setInterval(updateCron, 10)
    } else {
        // Siamo in moto: l'utente vuole mettere in pausa.
        butP.textContent = "Resume";
        // Ferma l'intervallo cosi il display resta fermo.
        clearInterval(timeInt)
        // Salva l'istante esatto in cui e iniziata la pausa.
        pauseStartedAt = Date.now()
        // Segna che il cronometro e in pausa.
        st = true
    }

    
});

// Quando clicchi Reset, azzera tutto e riporta il display a zero.
butR.addEventListener("click", () =>{
    // Ferma l'intervallo in esecuzione.
    clearInterval(timeInt);
    // Azzera il timestamp di inizio (senza let, altrimenti crea una variabile locale).
    startTime = 0;
    // Azzera il totale dei millisecondi in pausa.
    pausedTime = 0;
    // Azzera il marcatore di inizio pausa.
    pauseStartedAt = 0;
    // Segna che il cronometro non e in pausa.
    st = false;
    // Riporta il bottone Pause alla scritta originale.
    butP.textContent = "Pause";
    // Mostra il valore iniziale nel display.
    textCron.textContent = "00.00";
});