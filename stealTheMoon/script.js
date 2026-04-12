// Elementi coinvolti nel semplice effetto hide/show della luna.
const div = document.querySelector("#div-img");
const button = document.querySelector("#but");

// Alterna la visibilita della luna e aggiorna il testo del pulsante.
button.addEventListener("click", () =>{
    if(div.style.visibility === "visible"){
        div.style.visibility = "hidden";
        button.textContent = "Bring it back!"
    }else{
        div.style.visibility = "visible";
        button.textContent = "Steal the moon!"
    }
    
});