// Collezioni allineate per indice: ogni pulsante controlla una luce e una sirena.
let bottoni = document.querySelectorAll(".buttons");
let luci = document.querySelectorAll(".light");
let sirene = document.querySelectorAll(".sir");


// Feedback visivo al passaggio del mouse sui pulsanti.
bottoni.forEach(button =>{
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "rgb(96, 96, 227, 0.8)";
        event.target.style.cursor = "pointer";
        event.target.style.scale = "1.05";
    });
});

// Ripristina lo stile originale quando il cursore esce dal pulsante.
bottoni.forEach(button =>{
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "rgb(96, 96, 227)";
        event.target.style.scale = "1";
    });
});

// Avvia o ferma l'animazione della sirena associata al pulsante cliccato.
bottoni.forEach((button, index) =>{
    button.addEventListener("click", () => {
        if(button.textContent === "Start"){
            button.textContent = "Stop"
            // Rimuoviamo e riapplichiamo le classi per riavviare l'animazione da zero.
            luci[index].classList.remove("actL");
            void luci[index].clientWidth;
            luci[index].classList.add("actL");
            sirene[index].classList.remove("actS");
            void luci[index].clientWidth;
            sirene[index].classList.add("actS");
        }else{
            button.textContent = "Start"
            luci[index].classList.remove("actL");
            sirene[index].classList.remove("actS");
        }
        
    });
});