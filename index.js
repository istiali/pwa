const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "1234") {
        // Simulate a mouse click:
window.location.href = "storepage.html";

// Simulate an HTTP redirect:
window.location.replace("storepage.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})