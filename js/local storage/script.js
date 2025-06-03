
// Change forms
const login = document.getElementById("to-login")
const signUp = document.getElementById("to-signup")
const loginForm = document.querySelector(".login-form")
const singUpForm = document.querySelector(".signup-form")


login.addEventListener("click", function () {
    singUpForm.style.display = "none"
    loginForm.style.display = "flex"

})

signUp.addEventListener("click", function () {
    singUpForm.style.display = "flex"
    loginForm.style.display = "none"

})


//* Signup Form Validation

// Selecting Input fields

const emailInput = document.getElementById("signup-email");
const phoneInput = document.getElementById("phone-number");
const passwordInput = document.getElementById("signup-password");
const nameInput = document.getElementById("user-name")

// Error messages container

const emailError = document.getElementById("email-error")
const phoneError = document.getElementById("phone-error")
const passwordError = document.getElementById("password-error")



// Handle submission

singUpForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let isValid = true

    // clear previous error
    emailError.textContent = ""
    phoneError.textContent = ""
    passwordError.textContent = ""


    const nameValue = nameInput.value.trim()
    // Validate Email
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "" || !emailPattern.test(emailValue)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Validate Phone
    const phoneValue = phoneInput.value.trim();
    const phonePattern = /^[0-9]{10}$/;

    if (phoneValue === "" || !phonePattern.test(phoneValue)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }


    // Validate Password
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Get Users From LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check for Duplicate Email 
    const duplicateUser = users.find((user) => user.email === emailValue);
    if (duplicateUser) {
        emailError.textContent = "This email is already registered.";
        isValid = false;
    }

    // check for duplicate number in local storage
    const duplicatenumber = users.find((user) => user.phone === phoneValue);
    if (duplicatenumber) {
        phoneError.textContent = "This Phone Number is already registered."
        isValid = false
    }


    // If all fields are valid, proceed
    if (isValid) {
        // alert("Signup validated successfully!");
         console.log("Redirecting to profile.html...");
        window.location.href = "profile.html";

    }



    if (isValid) {
        const newUser = {
            userName:nameValue,
            email: emailValue,
            phone: phoneValue,
            password: passwordValue,
        };


        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));


        localStorage.setItem("activeUser", JSON.stringify(newUser));

        singUpForm.reset()


        // --- Show success and optionally redirect ---
        // alert("Account created successfully!");

       

    }
});

// * login form

const loginEmailInput = document.getElementById("login-email");
const loginPasswordInput = document.getElementById("login-password");



loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // grab the input vlaue

    const loginEmail = loginEmailInput.value.trim();
    const loginPassword = loginPasswordInput.value.trim();

    // users from local storage

    const users = JSON.parse(localStorage.getItem("users",)) || [];

    // check user is signup

    const validUser = users.find((user => user.email === loginEmail && user.password === loginPassword))

    if (validUser) {
        localStorage.setItem("activeUser", JSON.stringify(validUser));
        // alert("Login successful!");
          window.location.href = "profile.html";
        
    } else {
        alert("Invalid email or password.");
    }
});


