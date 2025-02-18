// Form validation
const form = document.querySelector("form");
const firstNameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const jobSelect = document.querySelector("#job");
const checkbox = document.querySelector("#checkbox");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  // Validate the form fields
  if (!validateFirstName(firstNameInput.value)) {
    alert("Per favore inserisci un nome valido");
  } else if (!validateLastName(lastNameInput.value)) {
    alert("Per favore inserisci un cognome valido");
  } else if (!validateEmail(emailInput.value)) {
    alert("Per favore inserisci un indirizzo email valido");
  } else if (!validateJob(jobSelect.value)) {
    alert("Per favore seleziona un tipo di lavoro");
  } else if (!validateCheckbox(checkbox.checked)) {
    alert("Per favore accetta i termini e le condizioni");
  } else {
    // If all fields are valid, submit the form
    form.submit();
  }
});

// Validation functions
function validateFirstName(value) {
  if (value === "" || !isNaN(value)) {
    return false;
  } else {
    return true;
  }
}

function validateLastName(value) {
  if (value === "" || !isNaN(value)) {
    return false;
  } else {
    return true;
  }
}

function validateEmail(value) {
  if (value === "" || !value.includes("@")) {
    return false;
  } else {
    return true;
  }
}

function validateJob(value) {
  if (value === "0") {
    return false;
  } else {
    return true;
  }
}

function validateCheckbox(checked) {
  if (!checked) {
    return false;
  } else {
    return true;
  }
}



// Function to calculate the final price
function calculatePrice() {
    const job = document.querySelector("#job").value;
    const promoCode = document.querySelector("#promoCode").value.toUpperCase();

    let hourlyPrice = 0;

     // Determine the hourly price based on the selected job type
    if (job === "1") {
        hourlyPrice = 20.50;
    } else if (job === "2") {
        hourlyPrice = 15.30;
    } else if (job === "3") {
        hourlyPrice = 33.60;
    }

    // Calculate the final price based on the hourly price and number of hours
    const hours = 10;
    let finalPrice = hours * hourlyPrice;

    if (["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"].includes(promoCode)) {
        finalPrice *= 0.75;
    } else if (promoCode !== "") {
        alert("Iserisci un codice promozionale valido");
    }

    // Format the final price as a string with two decimal places and the currency symbol
    const finalPriceFormatted = finalPrice.toFixed(2);
    const finalPriceWithCurrency = `€${finalPriceFormatted.replace('.', ',')}`;

     // Display the final price on the page
    document.querySelector("#finalPrice").innerHTML = finalPriceWithCurrency;
}

// Add an event listener to the submit button
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", function(event) {

    event.preventDefault();
    submitButton.disabled = true;
    const spinner = submitButton.querySelector("#spinner");
    const status = submitButton.querySelector("#buttonStatus");
    const originalStatusText = status.innerHTML;
    spinner.classList.toggle("d-none");
    status.innerHTML = `Loading...`;
    setTimeout(() => {
        spinner.classList.toggle("d-none");
        status.innerHTML = originalStatusText;
        submitButton.disabled = false;
        calculatePrice();
    }, 2000);
});