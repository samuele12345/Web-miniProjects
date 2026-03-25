let inpF = document.querySelectorAll(".inp-from");
let inpT = document.querySelectorAll(".inp-to");
let tex = document.querySelector("#textSec");
let button = document.querySelector("#but"); 
let res1 = document.querySelector("#result1");
let res2 = document.querySelector("#result2");
let back = document.querySelector(".main");
// Tiene traccia del tema attivo per rimuoverlo prima di applicare il successivo.
let state = "medium";


button.addEventListener("click", () =>{
    // contF/contT salvano l'indice dell'unita selezionata nei gruppi radio.
    let contF;
    let contT;
    // Flag di validazione selezione radio.
    let checkF = false;
    let checkT = false;
    let i = 0;
    let j = 0;

    // Ricava unita di origine (0=C, 1=F, 2=K).
    inpF.forEach(el => {
        if(el.checked){
            checkF = true;
            contF = i;
        }
        i++;
    });

    // Ricava unita di destinazione (0=C, 1=F, 2=K).
    inpT.forEach(el => {
        if(el.checked){
            checkT = true;
            contT = j;
        }
        j++;
    });

    if(!checkF && !checkT){
        window.alert("Check a value for from and to");
    }else if(!checkF && checkT){
        window.alert("Check a value for from");
    }else if(checkF && !checkT){
        window.alert("Check a value for to");
    }else{
        // Validazione input testuale: non vuoto, numerico, conversione non identica.
        if(tex.value === ""){
            window.alert("Inserire un valore");
        }else{
            if(Number.isNaN(Number(tex.value))){
                window.alert("Valore non valido");
            }else{
                if(contF === contT){
                    window.alert("Le unità di misura devono essere diverse");
                }else{

                    // Classificazione clima basata sull'unita di partenza.
                    if(contF === 0){
                        if(Number(tex.value) < 10){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "cold";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }else if(Number(tex.value) >= 10 && Number(tex.value) <= 25){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "medium";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }else if(Number(tex.value) > 25){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "warm";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }
                    }else if(contF === 1){
                        if(Number(tex.value) < 50){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "cold";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }else if(Number(tex.value) >= 50 && Number(tex.value) <= 77){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "medium";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }else if(Number(tex.value) > 77){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "warm";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }
                    }else if(contF === 2){
                        if(Number(tex.value) < 283){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "cold";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }else if(Number(tex.value) >= 283 && Number(tex.value) <= 298){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "medium";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }else if(Number(tex.value) > 298){
                            tex.classList.remove(state);
                            button.classList.remove(state);
                            back.classList.remove(state);
                            state = "warm";
                            tex.classList.add(state);
                            button.classList.add(state);
                            back.classList.add(state);
                        }
                    }


                    // Echo del valore sorgente con il relativo simbolo unita.
                    if(contF === 0){
                        res1.textContent = `${tex.value}°`;
                    }else if(contF === 1){
                        res1.textContent = `${tex.value}F`;
                    }else if(contF === 2){
                        res1.textContent = `${tex.value}K`;
                    }

                    // Conversioni tra tutte le coppie C/F/K (solo unita diverse).
                    if(contF === 0){

                        if(contT === 1){
                            res2.textContent = `${Math.floor(Number(tex.value) * (9/5) + 32)}°F`;
                        }else if(contT === 2){
                            res2.textContent = `${Math.floor(Number(tex.value) + 273)}K`;
                        }
                        
                    }else if(contF === 1){

                        if(contT === 0){
                            res2.textContent = `${Math.floor((Number(tex.value) -32 ) * (5/9))}°C`;
                        }else if(contT === 2){
                            res2.textContent = `${Math.floor((Number(tex.value) -32 ) * (5/9) + 273)}K`;
                        }
                        
                    }else if(contF === 2){

                        if(contT === 0){
                            res2.textContent = `${Math.floor(Number(tex.value) - 273)}°C`;
                        }else if(contT === 1){
                            res2.textContent = `${Math.floor((Number(tex.value) - 273 ) * (9/5) + 32)}°F`;
                        }
                        
                    }
                }
            }

            
        }
        
    }
    // Svuota l'input dopo ogni conversione/tentativo.
    tex.value = "";
});