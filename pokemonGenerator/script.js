/*
    - fetch è una funzione che permette di fare richieste HTTP per recuperare 
    risorse da un server o da un'API.
    - significato di "fetch": vuol dire "andare a prendere" o "recuperare".
    - In JavaScript si usa per ottenere dati da internet e poi utilizzarli nel programma.
    - Esempi di dati recuperati: JSON style data, immagini e files.
    - Semplifica il fetching di dati asincrono ed è utilizzato per interagire con le API
    utili ad ottenere e inviare dati in modo asincrono sul web
    - fetch ha due argomenti:
    fetch(url, {options})
    un url della risorsa e e un oggetto di opzioni
    - solitamente {options} si può trovare nelle forme:
    {method: "GET"}, {method: "POST"}, {method: "PUT"}, {method: "DELETE"}
    get per ottenere una risorsa, post per inviare o postare dati, put per sostituire dati e
    delete per eliminare dati.
    il metodo di default è get quindi si può non esplicitarlo

    I codici di stato HTTP si suddividono in 5 classi (status codes):
    1. 100-199: informational response → il server sta elaborando la richiesta.
    2. 200-299: successful response → la richiesta è andata a buon fine.
    3. 300-399: redirection messages → la risorsa è stata spostata o reindirizzata.
    4. 400-499: client error responses → c'è un errore nella richiesta del client.
    5. 500-599: server error responses → il server ha avuto un problema interno.

    Nella response di fetch si possono trovare soprattutto in:
    - response.status → mostra il numero del codice, per esempio 200 o 404
    - response.ok → restituisce true se la risposta è tra 200 e 299
    - response.statusText → mostra un breve testo associato al codice
*/

// richiesta a pokeapi.co dei dati relativi a ditto tramite GET (implicito)
/*
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => console.log(response))
    .catch(error => console.log(error))
*/

/*
esempio di response di una richiesta che va a buon fine (consultabile nella console):

- headers: Headers {} // contiene le intestazioni della risposta
- ok: true // la richiesta è andata a buon fine
- redirected: false // non c'è stato nessun reindirizzamento
- status: 200 // codice di stato HTTP, rientra nelle successful responses
- statusText: "" // breve testo associato al codice di stato
- type: "cors" // indica il tipo di risposta ricevuta
- url: "https://pokeapi.co/api/v2/pokemon/ditto" // URL usato per la fetch

Queste informazioni si leggono dentro l'oggetto response restituito da fetch.
*/

/*
in:
 [[Prototype]]: Response
si trovano diversi metodi per trasformare i dati in formato leggibile, ad esempio:

- arrayBuffer: ƒ arrayBuffer()
- blob: ƒ blob()
    body: (…)
    bodyUsed: (…)
- bytes: ƒ bytes()
- clone: ƒ clone()
- formData: ƒ formData()
    headers: (…)
- json: ƒ json()
    ok: (…)
    redirected: (…)
    status: (…)
    statusText: (…)
- text: ƒ text()
    type: (…)
    url: (…)

in questo caso ci interessa json
*/

// utilizzo del metodo json() e stampa dei dati ottenuti
// in questo modo si ottengono tutte le proprietà contenute nell'oggetto
/*
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
*/
/*
proprietà ottenute:

- abilities: (2) [{…}, {…}]
- base_experience: 101
- cries: {latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg', legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg'}
- forms: [{…}]
- game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    height: 3
- held_items : (2) [{…}, {…}]
    id: 132
    is_default: true
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/132/encounters"
- moves: [{…}]
    name: "ditto"
    order: 214
- past_abilities: [{…}]
- past_stats: [{…}]
- past_types: []
- specie: {name: 'ditto', url: 'https://pokeapi.co/api/v2/pokemon-species/132/'}
- sprites: {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', …}
- stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
- types: [{…}]
    weight: 40
*/

// in questo caso si ottiene solo la proprietà name
/*
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.log(error))
*/

// in questo caso si ottiene solo la proprietà name
/*
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.log(error))
*/

// se provo a fetchare un pokemon non esistente viene ritornato uno status error
// con codice di errore 404:
/*
fetch("https://pokeapi.co/api/v2/pokemon/franco")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.log(error))
*/

/*
.then(response => console.log(response))
stampando nella console response, sempre in:
- headers: Headers {}
    ok: false // la richiesta non è andata a buon fine
    redirected: false
    status: 404 // codice di stato HTTP, rientra nelle client error responses
    statusText: ""
    type: "cors"
    url: "https://pokeapi.co/api/v2/pokemon/franco"
*/
// GET https://pokeapi.co/api/v2/pokemon/franco 404 (Not Found)

/*
// in questo caso il catch intercetta un errore
fetch("https://pokeapi.co/api/v2/pokemon/franco")
    .then(response => {
        // controlla se la richiesta ha ok: false
        if(!response.ok){
            // lancio di un errore se si entra nell'if, verrà poi captato da catch
            throw new Error("Could not fetch resource");
        }

        // ritorna response.json() se non si entra nell'if
        return response.json();
    })
    .then(data => console.log(data.name))
    .catch(error => console.log(error))
*/
// Error: Could not fetch resource at script.js:155:19

// in questo caso il catch NON intercetta un errore
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        // controlla se la richiesta ha ok: false
        if(!response.ok){
            // lancio di un errore se si entra nell'if, verrà poi captato da catch
            throw new Error("Could not fetch resource");
        }

        // ritorna response.json() se non si entra nell'if
        return response.json();
    })
    .then(data => console.log(data.name))
    .catch(error => console.log(error))
*/

// con async e await
/*
async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

        if(!response.ok){
            // lancio di un errore se si entra nell'if, verrà poi captato da catch
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        console.log(data);
    }catch(error){
        console.log(error);
    }
}

fetchData();
*/


// generazione dell'immagine di un pokemon tramite il nome inserito dall'utente
async function fetchData(name){
    // immagine in cui verrà mostrato lo sprite del pokemon
    const img = document.querySelector("#pokemonSprite")
    // paragrafo usato per mostrare un eventuale messaggio di errore
    const pS = document.querySelector("#p-search")

    try{
        // reset iniziale: nasconde immagine e messaggio prima di una nuova ricerca
        img.style.display = "none";
        img.style.visibility = "hidden";
        pS.style.display = "none";
        pS.textContent = "";

        // legge il nome scritto nell'input e lo converte in minuscolo
        const pokemonName = document.querySelector("#inp").value.toLowerCase();
        // richiesta GET all'API PokeAPI per ottenere i dati del pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            // se la response non è valida, viene generato un errore
            // che sarà poi intercettato dal catch
            throw new Error("Could not fetch resource");
        }

        // converte la risposta JSON in un oggetto JavaScript
        const data = await response.json();

        // estrae l'URL dello sprite frontale del pokemon
        const pokemonSprite = data.sprites.front_default;

        // gli sprite sono piccoli quindi l'immagine è un po' sgranata
        img.src = pokemonSprite;
        img.style.display = "block";
        img.style.visibility = "visible";
    }catch(error){
        // se qualcosa va storto, nasconde l'immagine precedente
        img.style.display = "none";
        img.src = "";
        img.style.visibility = "hidden";

        // mostra un messaggio all'utente se il pokemon non viene trovato
        pS.textContent = "Couldn't find any...";
        pS.style.display = "block";
        pS.style.visibility = "visible";

        // stampa l'errore in console per il debug
        console.log(error);
    }
}

