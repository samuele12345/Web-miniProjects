let inputs = document.querySelectorAll(".inp");
let button = document.querySelector("#but");
let day = document.querySelector("#tit2");

button.addEventListener("click", () => {
    day.textContent = "";

    const arr = Array.from(inputs);

    const empty = arr.some(input => input.value.trim() === "");
    if (empty) {
        window.alert("Compilare tutti i campi");
        return;
    }

    const values = arr.map(input => Number(input.value));
    const hasInvalidNumber = values.some(value => !Number.isInteger(value));
    if (hasInvalidNumber) {
        window.alert("Inserire valori numerici interi");
        return;
    }

    const [inputDay, inputMonth, inputYear] = values;

    if (inputDay < 1 || inputDay > 31 || inputMonth < 1 || inputMonth > 12 || inputYear < 1900 || inputYear > 2026) {
        window.alert("Inserire una data valida");
        return;
    }

    const data = new Date(inputYear, inputMonth - 1, inputDay);

    // Verify that JS Date did not auto-correct an invalid date (e.g. 31/02).
    if (
        data.getFullYear() !== inputYear ||
        data.getMonth() !== inputMonth - 1 ||
        data.getDate() !== inputDay
    ) {
        window.alert("Data non valida");
        return;
    }

    day.classList.add("visible");

    switch (data.getDay()) {
        case 0:
            day.textContent = "Sunday (Domenica)";
            break;
        case 1:
            day.textContent = "Monday (Lunedì)";
            break;
        case 2:
            day.textContent = "Tuesday (Martedì)";
            break;
        case 3:
            day.textContent = "Wednesday (Mercoledì)";
            break;
        case 4:
            day.textContent = "Thursday (Giovedì)";
            break;
        case 5:
            day.textContent = "Friday (Venerdì)";
            break;
        case 6:
            day.textContent = "Saturday (Sabato)";
            break;
    }

});