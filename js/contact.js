document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    clearErrors();

    if (name === "") {
        showError("name", "Name is required.");
        isValid = false;
    }

    if (email === "") {
        showError("email", "Email is required.");
        isValid = false;
    } else if (!validateEmail(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    }

    if (message === "") {
        showError("message", "Message is required.");
        isValid = false;
    }

    if (isValid) {
        showPopup("Form submitted successfully!");
    }
});

function showError(inputId, errorMessage) {
    const inputField = document.getElementById(inputId);
    const errorField = document.createElement("div");
    errorField.className = "error-message";
    errorField.innerText = errorMessage;
    inputField.parentElement.appendChild(errorField);
    inputField.classList.add("input-error");
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(error) {
        error.remove();
    });

    const inputFields = document.querySelectorAll(".input-error");
    inputFields.forEach(function(input) {
        input.classList.remove("input-error");
    });
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.innerText = message;

    document.body.appendChild(popup);

    setTimeout(function() {
        popup.classList.add("show");
    }, 10);

    setTimeout(function() {
        popup.classList.remove("show");
        setTimeout(function() {
            popup.remove();
        }, 300);
    }, 3000);
}
