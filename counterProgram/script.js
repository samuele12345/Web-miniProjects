/*
Questo script gestisce un piccolo contatore numerico.
Il codice parte quando il DOM e pronto, cosi gli elementi HTML esistono gia.
*/

document.addEventListener("DOMContentLoaded", () =>{
    // Riferimenti ai pulsanti e al numero mostrato nella pagina.
    const buttonDec = document.querySelector("#dec");
    const buttonRes = document.querySelector("#res");
    const buttonInc = document.querySelector("#inc");
    let numb = document.querySelector("#number");
    let counter = 0;

    buttonDec.addEventListener("click", () =>{
        counter--;
        // Aggiorna il numero mostrato dopo il decremento.
        numb.textContent = counter;
    });

    buttonRes.addEventListener("click", () =>{
        counter = 0;
        numb.textContent = counter;
    });

    buttonInc.addEventListener("click", () =>{
        counter++;
        numb.textContent = counter;
    });
});