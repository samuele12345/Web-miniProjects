// Variabile che conserva temporaneamente il testo inserito dall'utente.
let result;

const button = document.querySelector("#submit");
let parag = document.querySelector("#par");

// Al click legge il contenuto dell'input e lo mostra a schermo.
button.onclick = function () {
    
    const content = document.querySelector("#request");
    result = content.value.trim();
    // Blocca l'invio se l'utente non ha scritto nulla o solo spazi.
    if (result === "") {
        window.alert("insert something");
    } else {
        content.value = "";
        parag.textContent = `You wrote ${result}`;
    }
    
};