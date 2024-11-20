document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const logoutButton = document.getElementById("logoutButton");

    function updateAuthUI() {
        if (localStorage.getItem("username")) {
            loginForm.style.display = "none";
            logoutButton.style.display = "block";
            document.querySelector(".head1").textContent = `Welcome, ${localStorage.getItem("username")}`;
        } else {
            loginForm.style.display = "block";
            logoutButton.style.display = "none";
        }
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        localStorage.setItem("username", username);
        updateAuthUI();
    });

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("username");
        updateAuthUI();
    });

    updateAuthUI();
});
