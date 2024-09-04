// JavaScript for Resources Page

// Show the resource request form
function showResourceForm(resourceName) {
    const formContainer = document.getElementById('resource-form-container');
    const resourceNameInput = document.getElementById('resource-name');

    // Set the resource name in the form
    resourceNameInput.value = resourceName;

    // Show the form
    formContainer.style.display = 'block';
}

// Validate the resource request form
function validateResourceForm() {
    const fullName = document.getElementById('full-name').value.trim();
    const intakeYear = document.getElementById('intake-year').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirm-email').value.trim();

    // Check for empty fields
    if (!fullName || !intakeYear || !email || !confirmEmail) {
        showPopup('Please fill out all fields.');
        return false;
    }

    // Check if intake year is a valid year
    const yearRegex = /^(19|20)\d{2}$/;
    if (!yearRegex.test(intakeYear)) {
        showPopup('Please enter a valid intake year.');
        return false;
    }

    // Check if the emails match
    if (email !== confirmEmail) {
        showPopup('Email and Confirm Email must match.');
        return false;
    }

    // Show success popup
    showPopup('Resources link sent to email!');
    document.getElementById('resource-form').reset(); // Reset the form
    document.getElementById('resource-form-container').style.display = 'none'; // Hide the form
    return false; // Prevent actual form submission
}

// Show popup message
function showPopup(message) {
    const popupContainer = document.getElementById('popup-container');
    const popup = document.createElement('div');
    popup.className = 'popup-message';
    popup.innerText = message;

    popupContainer.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('show');
    }, 10);

    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 300);
    }, 3000);
}
