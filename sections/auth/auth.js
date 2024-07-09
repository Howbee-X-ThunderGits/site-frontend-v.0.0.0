document.addEventListener('DOMContentLoaded', function () {
    const signupTab = document.getElementById('signup-tab');
    const loginTab = document.getElementById('login-tab');
    const authFormBody = document.getElementById('auth-form-body');

    function showSignupForm() {
        authFormBody.innerHTML = `
            <form id="signup-form" action="#">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                <small id="password-instruction">Use 8 digit password</small>

                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required>
<label for="invite-code">invite-code</label>
                        <input type="text" id="invite-code" name="invite-code" required>
                <label class="auth-form-checkbox-label" style="margin: 1rem 0rem;">
                    <input type="checkbox" name="terms" required>
                    I agree to the terms and conditions
                </label>

                <div class="form-footer">
                    <button type="submit" class="auth-form-submit-btn">Sign Up</button>
                    <span class="auth-form-switch">
                        <p>Already have an account? <a href="#" id="auth-switch-link">Sign In</a></p>
                    </span>
                </div>
            </form>
        `;

        document.getElementById('auth-switch-link').addEventListener('click', function (event) {
            event.preventDefault();
            showLoginForm();
        });
    }

    function showLoginForm() {
        authFormBody.innerHTML = `
            <form id="login-form" action="#">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>

                <div class="form-footer">
                    <button type="submit" class="auth-form-submit-btn">Login</button>
                    <span class="auth-form-switch">
                        <p>Don't have an account? <a href="#" id="auth-switch-link">Sign Up</a></p>
                    </span>
                </div>
            </form>
        `;

        document.getElementById('auth-switch-link').addEventListener('click', function (event) {
            event.preventDefault();
            showSignupForm();
        });
    }

    signupTab.addEventListener('click', showSignupForm);
    loginTab.addEventListener('click', showLoginForm);

    // Initially show the signup form
    showSignupForm();
});
