// Riferimenti al bottone, ai radio button e ai testi associati.
let button = document.querySelector("#button");
let paypal = document.querySelector("#paypal");
let paypalLabel = document.querySelector("#p-label");
let visa = document.querySelector("#visa");
let visaLabel = document.querySelector("#v-label");
let mastercard = document.querySelector("#mastercard");
let mastercardLabel = document.querySelector("#m-label");

// Tiene traccia del radio attualmente selezionato per poter fare toggle con un secondo click.
let selectedRadio = null;

// Se clicco due volte la stessa opzione, la deseleziono.
paypal.addEventListener("click", () => {
    if(selectedRadio === paypal){
        paypal.checked = false;
        selectedRadio = null;
    } else {
        selectedRadio = paypal;
    }
});

// Stessa logica di toggle per Visa.
visa.addEventListener("click", () => {
    if(selectedRadio === visa){
        visa.checked = false;
        selectedRadio = null;
    } else {
        selectedRadio = visa;
    }
});

// Stessa logica di toggle per Mastercard.
mastercard.addEventListener("click", () => {
    if(selectedRadio === mastercard){
        mastercard.checked = false;
        selectedRadio = null;
    } else {
        selectedRadio = mastercard;
    }

    /*
        con switch:
        switch(selectedRadio){
            case mastercard:
                mastercard.checked = false;
                selectedRadio = null;
            default:
                selectedRadio = mastercard;
        }

    */
});

// Controlla la selezione e mostra un alert con il metodo scelto.
button.addEventListener("click", () => {
    if(!paypal.checked && !visa.checked && !mastercard.checked){
        window.alert("Choose an option!");
    }else{
        if(paypal.checked){
            window.alert(`Payment completed using ${paypalLabel.textContent}`);
            paypal.checked = false;
            selectedRadio = null;
        }else if(visa.checked){
            window.alert(`Payment completed using ${visaLabel.textContent}`);
            visa.checked = false;
            selectedRadio = null;
        }else if(mastercard.checked){
            window.alert(`Payment completed using ${mastercardLabel.textContent}`);
            mastercard.checked = false;
            selectedRadio = null;
        }

    }
});