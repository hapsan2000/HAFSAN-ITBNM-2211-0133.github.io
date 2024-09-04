// JavaScript for Courses Page

// Show course details
function showDetails(button) {
    const courseBox = button.closest('.course-box');
    const courseTitle = courseBox.querySelector('h3').textContent;
    const extraInfo = courseBox.querySelector('.extra-info');
    const registerForm = courseBox.querySelector('.register-form');

    // Logic to check if the course is Web Development or another course
    if (courseTitle === "Web Development") {
        // Show the details and allow registration
        extraInfo.style.display = 'block';
        registerForm.style.display = 'none'; // Ensure form is hidden initially
    } else {
        // Disable the "View More" button for other courses
        button.textContent = "Entry Finished, Try Next Intake";
        button.disabled = true;
        extraInfo.style.display = 'none'; // Hide extra info for other courses
    }

    // Hide all other extra-info and register-form sections
    document.querySelectorAll('.course-box').forEach(box => {
        if (box !== courseBox) {
            box.querySelector('.extra-info').style.display = 'none';
            box.querySelector('.register-form').style.display = 'none';
        }
    });
}

// Show registration form and hide course details for Web Development
function showRegisterForm(button) {
    const courseBox = button.closest('.course-box');
    const courseTitle = courseBox.querySelector('h3').textContent;
    const registerForm = courseBox.querySelector('.register-form');

    if (courseTitle === "Web Development") {
        // Hide the extra-info and show the registration form for Web Development
        courseBox.querySelector('.extra-info').style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Validate registration form
function validateForm(form) {
    const fullName = form['full-name'].value.trim();
    const city = form['city'].value.trim();
    const province = form['province'].value.trim();
    const homeAddress = form['home-address'].value.trim();
    const postalCode = form['postal-code'].value.trim();
    const phoneNumber = form['phone-number'].value.trim();
    const email = form['email'].value.trim();

    if (!fullName || !city || !province || !homeAddress || !postalCode || !phoneNumber || !email) {
        showPopup('Please fill out all fields.');
        return false;
    }

    // Check if the phone number contains exactly 10 digits and is numeric
    const isNumeric = /^\d{10}$/.test(phoneNumber);
    if (!isNumeric) {
        showPopup('Phone number must be exactly 10 digits.');
        return false;
    }

    // Show success popup
    showPopup('Registered successfully!');
    form.reset();
    const courseBox = form.closest('.course-box');
    courseBox.querySelector('.register-form').style.display = 'none';
    return false; // Prevent actual form submission
}


// Show popup message
function showPopup(message, type) {
    const popupContainer = document.getElementById('popup-container');
    const popup = document.createElement('div');
    popup.className = `popup-message ${type}`;
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
