/*
addEventListener permette di reagire agli eventi della pagina, rendendola interattiva.

Esempi usati qui:
- mouseover: il cursore entra nell'elemento
- mouseout: il cursore esce dall'elemento
- click: l'utente clicca sull'elemento

Sintassi:
elemento.addEventListener("evento", callback)
*/

// Recupera gli elementi HTML che verranno modificati durante gli eventi.
const clDiv = document.querySelector("#clMe");
const titolo1 = document.querySelector("#tit1");
const titolo2 = document.querySelector("#tit2");

// Quando il mouse passa sopra il box, cambiano colore, scala e contenuto testuale.
clDiv.addEventListener("mouseover", () =>{
    clDiv.style.backgroundColor = "rgb(252, 228, 12)";
    clDiv.style.scale = "1.01";
    titolo1.textContent = "Will you really?";
    titolo2.textContent = "😕";
});

// Quando il mouse esce dal box, tutto torna allo stato iniziale.
clDiv.addEventListener("mouseout", () =>{
    clDiv.style.backgroundColor = "lightgreen";
    clDiv.style.scale = "1";
    titolo1.textContent = "Click me!";
    titolo2.textContent = "😄";
});

// Al click il box diventa rosso, cambia messaggio e riparte l'animazione.
clDiv.addEventListener("click", () =>{
    // Rimuove la classe così il browser vede un vero cambio quando verrà riaggiunta.
    clDiv.classList.remove("cld");

    // Leggere offsetWidth forza il browser a ricalcolare il layout.
    // "void" serve solo a ignorare il valore numerico restituito.
    // Questo trucco permette di riavviare l'animazione CSS quando la classe viene riaggiunta subito dopo.
    void clDiv.offsetWidth;

    clDiv.style.scale = "1";
    clDiv.classList.add("cld");
    clDiv.style.backgroundColor = "red";
    titolo1.textContent = "Ouch!";
    titolo2.textContent = "😣";
});