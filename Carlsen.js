// Clear error message functions
function clearSexError() { 
    // Clear sex selection error when radio button clicked
    document.getElementById('sexError').innerHTML = ''; 
}
function clearKnowledgeError() { 
    // Clear ocean knowledge error when selection changed
    document.getElementById('knowledgeError').innerHTML = ''; 
}
function clearExpError() { 
    // Clear marine experience error when checkbox clicked
    document.getElementById('expError').innerHTML = ''; 
}
function checkName() { /* Simple blur handler */ }
function checkBirthdate() { /* Simple blur handler */ }
function checkEmail() { /* Simple blur handler */ }
function checkUsername() { /* Simple blur handler */ }
function checkPassword() { /* Simple blur handler */ }
function checkConfirm() { /* Simple blur handler */ }
function checkYears() { /* Simple blur handler */ }

function validateForm() {
    // Clear all previous error messages
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('birthdateError').innerHTML = '';
    document.getElementById('sexError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('confirmError').innerHTML = '';
    document.getElementById('knowledgeError').innerHTML = '';
    document.getElementById('expError').innerHTML = '';
    document.getElementById('yearsError').innerHTML = '';
    document.getElementById('successMessage').innerHTML = '';

    let isValid = true;

    // Validate full name
    let name = document.getElementById('fullName').value.trim();
    if (name.length == 0) {
        document.getElementById('nameError').innerHTML = 'Full name cannot be empty';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('nameError').innerHTML = 'Full name must be 2+ characters';
        isValid = false;
    }

    // Validate birthdate (must be 13+ years old)
    let birthdate = document.getElementById('birthdate').value;
    if (birthdate == '') {
        document.getElementById('birthdateError').innerHTML = 'Birthdate cannot be empty';
        isValid = false;
    } else {
        let birthDate = new Date(birthdate);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (today.getMonth() < birthDate.getMonth() || 
            (today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 13) {
            document.getElementById('birthdateError').innerHTML = 'Must be 13 years or older';
            isValid = false;
        }
    }

    // Validate sex selection
    let sexButtons = document.getElementsByName('sex');
    let sexChecked = false;
    for (let i = 0; i < sexButtons.length; i++) {
        if (sexButtons[i].checked) {
            sexChecked = true;
            break;    
        }
    }
    if (!sexChecked) {
        document.getElementById('sexError').innerHTML = 'Please select your sex';
        isValid = false;
    }

    // Validate email
    let email = document.getElementById('email').value.trim();
    if (email.length == 0) {
        document.getElementById('emailError').innerHTML = 'Email cannot be empty';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').innerHTML = 'Email must have @ and .';
        isValid = false;
    }

    // Validate username (8-20 chars, letters/numbers only)
    let username = document.getElementById('username').value.trim();
    let lettersNumbers = /^[a-zA-Z0-9]+$/;
    if (username.length < 8 || username.length > 20) {
        document.getElementById('usernameError').innerHTML = 'Username must be 8-20 characters';
        isValid = false;
    } else if (!lettersNumbers.test(username)) {
        document.getElementById('usernameError').innerHTML = 'Username: letters and numbers only';
        isValid = false;
    }

    // Validate password (10+ chars, uppercase, lowercase, number)
    let password = document.getElementById('password').value;
    if (password.length < 10) {
        document.getElementById('passwordError').innerHTML = 'Password must be 10+ characters';
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById('passwordError').innerHTML = 'Password needs 1 uppercase letter';
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        document.getElementById('passwordError').innerHTML = 'Password needs 1 lowercase letter';
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        document.getElementById('passwordError').innerHTML = 'Password needs 1 number';
        isValid = false;
    }

    // Validate password confirmation
    let confirmPass = document.getElementById('confirmPassword').value;
    if (password.length >= 10 && password !== confirmPass) {
        document.getElementById('confirmError').innerHTML = 'Passwords must match';
        isValid = false;
    }

    // Validate ocean knowledge dropdown selection
    let oceanKnowledge = document.getElementById('oceanKnowledge').value;
    if (oceanKnowledge == '') {
        document.getElementById('knowledgeError').innerHTML = 'Select your ocean knowledge level';
        isValid = false;
    }

    // Validate marine experience checkboxes (at least 1 selected)
    let marineExp = document.getElementsByName('marineExp');
    let expSelected = false;
    for (let i = 0; i < marineExp.length; i++) {
        if (marineExp[i].checked) {
            expSelected = true;
            break;
        }
    }
    if (!expSelected) {
        document.getElementById('expError').innerHTML = 'Select at least 1 marine experience';
        isValid = false;
    }

    // Validate years interested in oceans (not empty, not negative)
    let oceanYears = document.getElementById('oceanYears').value;
    if (oceanYears == '') {
        document.getElementById('yearsError').innerHTML = 'Enter years interested in oceans';
        isValid = false;
    } else if (oceanYears < 0) {
        document.getElementById('yearsError').innerHTML = 'Years cannot be negative';
        isValid = false;
    }

    // Show success message if all validations pass
    if (isValid) {
        document.getElementById('successMessage').innerHTML = 'Success! Welcome to Wonders of the Deep!';
    }

    return isValid;
}