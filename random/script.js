// node random\script.js

/*
const min = 0;
const max = 100;

// numero random tra 0 e 100 arrotondato
const result = Math.floor(Math.random() * (max-min+1)) + min;

console.log("risultato: " + result);

*/

// Riferimenti agli elementi della pagina.
let numero = document.querySelector("#numero");
let min = document.querySelector("#min");
let max = document.querySelector("#max");
let button = document.querySelector("#bottone");
let result = 0;

// Genera un numero casuale solo se l'intervallo inserito e valido.
button.addEventListener("click", () =>{
    const minValue = min.value.trim();
    const maxValue = max.value.trim();

    // Controlla i casi in cui manca uno o entrambi i valori.
    if (minValue === "" && maxValue === "") {
        window.alert("Inserire i valori!");
    } else if (minValue === "" && maxValue !== "") {
        window.alert("Inserire il valore minimo!");
    } else if (minValue !== "" && maxValue === "") {
        window.alert("Inserire il valore massimo!");
    } else {
        const minNum = Number(minValue);
        const maxNum = Number(maxValue);

        // Verifica che i due valori siano davvero numerici.
        if (Number.isNaN(minNum) || Number.isNaN(maxNum)) {
            window.alert("Inserire valori numerici!");
            return;
        }

        // Impedisce intervalli invertiti.
        if (minNum > maxNum) {
            window.alert("Il minimo non puo essere maggiore del massimo!");
            return;
        }

        // Formula per generare un intero compreso tra min e max inclusi.
        result = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        numero.textContent = result;
        min.value = "";
        max.value = "";
    }
});