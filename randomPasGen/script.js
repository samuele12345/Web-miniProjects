// Riferimenti agli elementi della UI.
let button1 = document.querySelector("#butGen");
let res = document.querySelector(".par-result");
let r, t, m;

// Variabile che conterra la password finale.
let password = "";

// Set di caratteri speciali e lettere usati nella generazione.
let char = ["£", "$", "%", "&", "*", "@", "#"];
let charAlf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];

button1.addEventListener("click", () =>{
    // Resetta il risultato precedente prima di generarne uno nuovo.
    password = "";
    res.classList.add("clicked");
    passGen();
});



function passGen(){
    // Genera una password di 12 caratteri con probabilita diverse:
    // numeri (30%), lettere (50%), caratteri speciali (20%).
    for(let i=0; i<12; i++){
        r = Math.random();

        if(r < 0.3){
            t = Math.floor(Math.random() * 9);
            password += String(t);
        }else if(r >= 0.3 && r <= 0.8){
            if(r <= 0.6){
                t = Math.floor(Math.random() * 24);
                password += charAlf.at(t);
            }else{
                t = Math.floor(Math.random() * 24);
                password += charAlf.at(t).toUpperCase();
            } 
        }else{
            m = Math.floor(Math.random() * 6)
            password += char.at(m);
        }
    }

    // Mostra la password generata nella pagina.
    res.textContent = password;
}