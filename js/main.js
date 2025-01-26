const submitButton = document.querySelector("form > button");

submitButton.addEventListener("click", function(event) {

    event.preventDefault();
    submitButton.disabled = true;
    const spinner = submitButton.querySelector("#spinner");
    const status = submitButton.querySelector("#buttonStatus");
    const originalStatusText = status.innerHTML;
    spinner.classList.toggle("d-none");
    status.innerHTML = `Loading...`;
    setTimeout(() => {
        
    }, timeout);
})