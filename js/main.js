// Form validation
const form = document.querySelector("form");
const firstNameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const jobSelect = document.querySelector("#job");
const checkbox = document.querySelector("#checkbox");
const submitButton = document.querySelector("#submitButton");
const spinner = document.querySelector("#spinner");
const buttonStatus = document.querySelector("#buttonStatus");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!validateFirstName(firstNameInput.value)) {
        alert("Per favore inserisci un nome valido");
        return;
    } 
    if (!validateLastName(lastNameInput.value)) {
        alert("Per favore inserisci un cognome valido");
        return;
    } 
    if (!validateEmail(emailInput.value)) {
        alert("Per favore inserisci un indirizzo email valido");
        return;
    } 
    if (!validateJob(jobSelect.value)) {
        alert("Per favore seleziona un tipo di lavoro");
        return;
    } 
    if (!validateCheckbox(checkbox.checked)) {
        alert("Per favore accetta la privacy policy");
        return;
    }

    submitButton.disabled = true;
    spinner.classList.remove("d-none");
    buttonStatus.innerHTML = "Loading...";

    setTimeout(() => {
        spinner.classList.add("d-none");
        buttonStatus.innerHTML = "Calcola preventivo";
        submitButton.disabled = false;
        calculatePrice();
    }, 2000);
});

//Functions to validate the form
function validateFirstName(value) {
    return value.trim() !== "" && isNaN(value);
}

function validateLastName(value) {
    return value.trim() !== "" && isNaN(value);
}

function validateEmail(value) {
    return value.trim() !== "" && value.includes("@");
}

function validateJob(value) {
    return value !== "0";
}

function validateCheckbox(checked) {
    return checked;
}

//Functions to calculate the price
function calculatePrice() {
    const job = document.querySelector("#job").value;
    const promoCode = document.querySelector("#promoCode").value.toUpperCase();

    let hourlyPrice = 0;

    if (job === "1") {
        hourlyPrice = 20.50;
    } else if (job === "2") {
        hourlyPrice = 15.30;
    } else if (job === "3") {
        hourlyPrice = 33.60;
    }

    const hours = 10;
    let finalPrice = hours * hourlyPrice;

    if (["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"].includes(promoCode)) {
        finalPrice *= 0.75;
    } else if (promoCode !== "") {
        alert("Inserisci un codice promozionale valido");
    }

    const finalPriceFormatted = finalPrice.toFixed(2).replace('.', ',');
    document.querySelector("#finalPrice").innerHTML = `€${finalPriceFormatted}`;
}