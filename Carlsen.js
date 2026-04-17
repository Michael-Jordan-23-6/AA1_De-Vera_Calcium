/*
Purpose: Signup form validation for Web Development class
Author: Student Name
Date: 2024
Validates all fields with loops for radio/checkbox, shows all errors at once
*/

/* Clear error helper functions for event handlers */
function clearSexError() { document.getElementById('sexError').innerHTML = ''; }
function clearSkillsError() { document.getElementById('skillsError').innerHTML = ''; }
function clearHtmlError() { document.getElementById('htmlError').innerHTML = ''; }
function checkName() { /* Simple blur handler */ }
function checkBirthdate() { /* Simple blur handler */ }
function checkEmail() { /* Simple blur handler */ }
function checkUsername() { /* Simple blur handler */ }
function checkPassword() { /* Simple blur handler */ }
function checkConfirm() { /* Simple blur handler */ }
function checkWeeks() { /* Simple blur handler */ }

function validateForm() {
    // Clear all errors first - no stale messages from last try
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('birthdateError').innerHTML = '';
    document.getElementById('sexError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('confirmError').innerHTML = '';
    document.getElementById('htmlError').innerHTML = '';
    document.getElementById('skillsError').innerHTML = '';
    document.getElementById('weeksError').innerHTML = '';
    document.getElementById('successMessage').innerHTML = '';

    let isValid = true;

    // ========================================
    // SECTION 1: PERSONAL INFO
    // ========================================

    // Check full name - not empty and 2+ chars
    let name = document.getElementById('fullName').value.trim();
    if (name.length == 0) {
        document.getElementById('nameError').innerHTML = 'Full name cannot be empty';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('nameError').innerHTML = 'Full name must be 2+ characters';
        isValid = false;
    }

    // Check birthdate - not empty and 13+ years old
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

    // Check sex radio buttons with LOOP
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

    // Check email
    let email = document.getElementById('email').value.trim();
    if (email.length == 0) {
        document.getElementById('emailError').innerHTML = 'Email cannot be empty';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').innerHTML = 'Email must have @ and .';
        isValid = false;
    }

    // ========================================
    // SECTION 2: ACCOUNT DETAILS
    // ========================================

    // Check username
    let username = document.getElementById('username').value.trim();
    let lettersNumbers = /^[a-zA-Z0-9]+$/;
    if (username.length < 8 || username.length > 20) {
        document.getElementById('usernameError').innerHTML = 'Username must be 8-20 characters';
        isValid = false;
    } else if (!lettersNumbers.test(username)) {
        document.getElementById('usernameError').innerHTML = 'Username: letters and numbers only';
        isValid = false;
    }

    // Check password
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

    // Check confirm password - only if main password is valid
    let confirmPass = document.getElementById('confirmPassword').value;
    if (password.length >= 10 && password !== confirmPass) {
        document.getElementById('confirmError').innerHTML = 'Passwords must match';
        isValid = false;
    }

    // ========================================
    // SECTION 3: TOPIC QUESTIONS
    // ========================================

    // Check dropdown
    let htmlVersion = document.getElementById('htmlVersion').value;
    if (htmlVersion == '') {
        document.getElementById('htmlError').innerHTML = 'Please choose HTML version';
        isValid = false;
    }

    // Check checkboxes with LOOP
    let skillBoxes = document.getElementsByName('skills');
    let skillChecked = false;
    for (let i = 0; i < skillBoxes.length; i++) {
        if (skillBoxes[i].checked) {
            skillChecked = true;
            break;
        }
    }
    if (!skillChecked) {
        document.getElementById('skillsError').innerHTML = 'Select at least 1 skill';
        isValid = false;
    }

    // Check number input
    let weeks = document.getElementById('codingWeeks').value;
    if (weeks == '') {
        document.getElementById('weeksError').innerHTML = 'Enter weeks per month';
        isValid = false;
    } else if (weeks < 0 || weeks > 4) {
        document.getElementById('weeksError').innerHTML = 'Must be 0-4 weeks';
        isValid = false;
    }

    // Show success only if ALL valid
    if (isValid) {
        document.getElementById('successMessage').innerHTML = 'Success! Welcome to Web Dev!';
    }

    return isValid;
}