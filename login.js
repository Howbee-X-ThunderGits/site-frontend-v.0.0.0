document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const showLoginLink = document.getElementById("show-login");
    const showSignupLink = document.getElementById("show-signup");

    loginBtn.addEventListener("click", function() {
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    signupBtn.addEventListener("click", function() {
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    showLoginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginBtn.click();
    });

    showSignupLink.addEventListener("click", function(event) {
        event.preventDefault();
        signupBtn.click();
    });
});

function togglePasswordVisibility(id) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

