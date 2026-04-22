# JavaScript Mini Projects

## Italiano

Questa repository raccoglie una serie di mini progetti JavaScript pensati per esercitarsi con logica, input utente, manipolazione del DOM e interfacce web semplici. Ogni cartella contiene un progetto indipendente basato su HTML, CSS e JavaScript vanilla.

### Struttura della repository

- **birthday**: calcola il giorno della settimana a partire dalla data di nascita inserita.
- **calculator**: calcolatrice web con operazioni base, cancellazione, eliminazione e accensione/spegnimento.
- **clickMe**: demo interattiva sugli eventi del mouse con effetti al passaggio e al click.
- **counterProgram**: contatore con incremento, decremento e reset.
- **cronometro**: cronometro con pulsanti start, pause e reset.
- **guessTheNumber**: mini gioco per indovinare un numero casuale.
- **jellyfish**: animazione interattiva in cui una medusa si muove nella scena con i tasti freccia.
- **ottenereInput**: lettura e validazione di un input testuale.
- **payment**: selezione di un metodo di pagamento con interfaccia semplice.
- **pokemonGenerator**: ricerca di un Pokémon per nome e visualizzazione dello sprite tramite richiesta all'API PokeAPI, con gestione degli errori.
- **random**: generazione di numeri casuali tra minimo e massimo.
- **temperatureConverter**: conversione tra scale di temperatura.
- **randomPasGen**: generatore di password casuali con interfaccia web.
- **rockPaperScissors**: classico gioco carta-forbici-sasso contro il computer.
- **sirens**: simulazione di tre sirene attivabili singolarmente con pulsanti start/stop.
- **speedGame**: gioco di rapidita in cui bisogna fermare il timer nel minor tempo possibile.
- **stealTheMoon**: piccola scena interattiva che nasconde e ripristina la luna con un pulsante.
- **weatherApp**: ricerca meteo per citta tramite OpenWeatherMap con visualizzazione di temperatura, umidita, emoji e messaggi di errore.

### Tecnologie utilizzate

- HTML5
- CSS3
- JavaScript vanilla

### Come eseguire i progetti

1. Apri la cartella del progetto che vuoi provare.
2. Apri il file `index.html` nel browser.
3. Interagisci con la pagina per testare le funzionalita.

Non sono richieste dipendenze esterne o procedure di build.

### Note privacy per weatherApp

Il progetto `weatherApp` usa una chiave API di OpenWeatherMap letta da `weatherApp/config.local.js`, file pensato per l'uso locale e da escludere dal versionamento tramite `.gitignore`.

- Non inserire la chiave direttamente in `script.js` o in altri file tracciati da Git.
- Se `config.local.js` e gia stato committato almeno una volta, `.gitignore` da solo non basta: il file va anche rimosso dall'indice Git.
- Se una chiave e stata pubblicata per errore, deve essere rigenerata o revocata dal provider.
- La vecchia chiave esposta e stata eliminata e non deve piu essere riutilizzata.
- Poiche `weatherApp` e un frontend statico, la chiave resta comunque visibile nelle richieste del browser: per una protezione reale serve un backend o una serverless function che faccia la chiamata all'API.

---

## English

This repository contains a collection of JavaScript mini projects designed to practice logic, user input handling, DOM manipulation, and simple web interfaces. Each folder contains a standalone project built with plain HTML, CSS, and JavaScript.

### Repository structure

- **birthday**: calculates the day of the week from a user-provided birth date.
- **calculator**: web calculator with basic operations, clear, delete, and on/off controls.
- **clickMe**: interactive mouse events demo with hover and click effects.
- **counterProgram**: counter with increment, decrement, and reset.
- **cronometro**: stopwatch with start, pause, and reset controls.
- **guessTheNumber**: mini game to guess a random number.
- **jellyfish**: interactive animation where a jellyfish moves around the scene with the arrow keys.
- **ottenereInput**: text input reading and validation.
- **payment**: payment method selection with a simple interface.
- **pokemonGenerator**: searches for a Pokémon by name and displays its sprite using the PokeAPI, with error handling for invalid input.
- **random**: random number generation between minimum and maximum values.
- **temperatureConverter**: conversion between temperature scales.
- **randomPasGen**: random password generator with a web interface.
- **rockPaperScissors**: classic rock-paper-scissors game against the computer.
- **sirens**: simulation of three sirens that can be started and stopped independently.
- **speedGame**: reaction-speed game where the goal is to stop the timer as quickly as possible.
- **stealTheMoon**: small interactive scene that hides and restores the moon with a button.
- **weatherApp**: city-based weather lookup using OpenWeatherMap, with temperature, humidity, emoji feedback, and error handling.

### Technologies used

- HTML5
- CSS3
- JavaScript vanilla

### How to run the projects

1. Open the project folder you want to try.
2. Open the `index.html` file in your browser.
3. Interact with the page to test its behavior.

No external dependencies or build steps are required.

### Privacy notes for weatherApp

The `weatherApp` project uses an OpenWeatherMap API key loaded from `weatherApp/config.local.js`, which is intended for local use and should be excluded from version control through `.gitignore`.

- Do not place the API key directly in `script.js` or any other tracked file.
- If `config.local.js` has already been committed at least once, `.gitignore` alone is not enough: the file must also be removed from the Git index.
- If a key was exposed by mistake, it should be rotated or revoked from the provider dashboard.
- The previously exposed key has been removed and must not be reused.
- Because `weatherApp` is a static frontend, the key is still visible in browser requests: real protection requires a backend or serverless function that performs the API call.
