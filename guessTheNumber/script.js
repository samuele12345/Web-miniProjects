// Riferimenti DOM usati in tutto il flusso del gioco.
let but = document.querySelector("#but");
let inp = document.querySelector("#input");
let titLa = document.querySelectorAll(".tit-lat");
let guessDiv = document.querySelector("#guess-div");

// Numero segreto iniziale: intero casuale tra 0 e 99.
let num = Math.floor(Math.random() * (100));
console.log(num);

// Click principale: valida input, confronta il valore e attiva feedback/animazioni.
but.addEventListener("click", () =>{
    // Conversione unica dell'input: da stringa a number.
    let val = Number(inp.value);

    // 1) Primo guard: campo vuoto (inclusi soli spazi).
    if(inp.value.trim() === ""){
        window.alert("Compilare il campo di inserimento");
    }else{
        // 2) Secondo guard: range ammesso nel gioco.
        if(val < 0 || val > 100){
            window.alert("Insert a number between 0 e 100");
        }else{
            // 3) Terzo guard: deve essere un numero intero valido.
            if(Number.isNaN(val) || !Number.isInteger(val)){
                window.alert("Insert an integer number");
            }else{

                // Caso vittoria: riavvia animazioni e genera un nuovo numero segreto.
                if(val === num){
                    restartAnimation(guessDiv, "guess");
                    restartAnimation(titLa, "activate");

                    num = Math.floor(Math.random() * (100));
                    console.log(num);
                }else{
                    // Caso errore: feedback diverso se il tentativo e troppo basso o troppo alto.
                    if(val < num){
                        window.alert("Wrong number (too low), retry!");
                    }else{
                        window.alert("Wrong number (too high), retry!");
                    }
                }
            }
        }
        
    }
    

    // Reset campo dopo ogni click, anche dopo errore, per forzare nuovo input esplicito.
    inp.value = "";
});

function restartAnimation(target, className){
    // Uniforma il target: accetta sia singolo Element sia NodeList/collezione.
    // espressione condizionale ternaria
    const elements = target instanceof Element ? [target] : Array.from(target);

    elements.forEach(el => {
        // Sequenza standard per far ripartire una CSS animation gia applicata:
        // remove class -> reflow forzato -> add class.
        el.classList.remove(className);
        void el.offsetWidth; // forza reflow per riavviare l'animazione
        el.classList.add(className);
    });
}