document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginBtn.addEventListener("click", () => {
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    });

    signupBtn.addEventListener("click", () => {
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
    });

    document.getElementById("show-signup").addEventListener("click", (e) => {
        e.preventDefault();
        signupBtn.click();
    });

    document.getElementById("show-login").addEventListener("click", (e) => {
        e.preventDefault();
        loginBtn.click();
    });
});

function togglePasswordVisibility(passwordId, toggleIcon) {
    const passwordField = document.getElementById(passwordId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}
