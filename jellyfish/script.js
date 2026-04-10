// Riferimenti agli elementi che useremo durante il movimento.
// `div` e' la sfera visibile, mentre `tit` e' il testo interno che cambia
// quando l'utente preme o rilascia un tasto freccia.
const div = document.querySelector("#sfera");
const tit = document.querySelector("#tit-1");

// Il contenitore reale del movimento e' il body dell'intera pagina.
// Dato che il body usa flex per centrare la sfera, la posizione iniziale della
// sfera e' il centro del viewport.
const body = document.body;

// Limiti massimi di spostamento rispetto al centro iniziale.
// Se il body e' alto 100vh e la sfera e' centrata, lo spazio utile sopra e sotto
// non e' l'intera altezza del body ma solo meta' dello spazio rimanente.
// Lo stesso ragionamento vale in orizzontale.
const maxY = (body.clientHeight - div.clientHeight) / 2;
const maxX = (body.clientWidth - div.clientWidth) / 2;

// Quantita' di pixel aggiunti o sottratti a ogni pressione del tasto.
const movement = 5;

// Coordinate correnti della sfera rispetto alla posizione iniziale.
// `x` controlla `left`, quindi il movimento orizzontale.
// `y` controlla `bottom`, quindi il movimento verticale.
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    // Ci interessa solo la tastiera direzionale. Tutto il resto viene ignorato.
    if(event.key.startsWith("Arrow")){

        // Evita lo scroll della pagina quando si usano le frecce.
        event.preventDefault();

        // Feedback visivo immediato: mentre un tasto e' premuto il testo cambia.
        tit.textContent = "yeee"

        switch(event.key){
            case "ArrowUp":
                // Aumentando `y` e assegnandolo a `bottom`, la sfera sale.
                // Il controllo evita di superare il bordo superiore disponibile.
                if(y<maxY){
                    y += movement;
                }
                break;
            case "ArrowDown":
                // Diminuiendo `y`, la sfera scende.
                // Il limite negativo corrisponde al bordo inferiore disponibile.
                if(y> -maxY){
                    y -= movement;
                }
                break;
            case "ArrowRight":
                // A destra aumentiamo `x`, sempre senza oltrepassare il bordo.
                if(x<maxX){
                    x += movement;
                }
                break;
            case "ArrowLeft":
                // A sinistra diminuiamo `x`, fino al limite sinistro disponibile.
                if(x>-maxX){
                    x -= movement;
                }
                break;
        }

        // Applichiamo la nuova posizione all'elemento.
        // Qui il movimento non e' continuo: avanza di uno step per ogni evento keydown.
        div.style.left = `${x}px`
        div.style.bottom = `${y}px`
    }
});

document.addEventListener("keyup", event => {
    // Quando il tasto viene rilasciato, ripristiniamo il testo iniziale.
    // In questa versione non controlliamo quale tasto e' stato rilasciato,
    // quindi qualunque keyup fara' tornare il titolo a "Move Me!".
    tit.textContent = "Move Me!"
});
