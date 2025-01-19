const submitButton = document.querySelector("form > button");

submitButton.addEventListener("click", function(event) {

    event.preventDefault();
    submitButton.disabled = true;
    
})