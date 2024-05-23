document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulating login process with hardcoded credentials
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct (for demo purpose)
    if (username === "21IS109" && password === "VAR123") {
        // Set session data
        sessionStorage.setItem("loggedIn", true);

        // Redirect to dashboard
        window.location.href = "dashbord.html";
    } else {
        alert("Invalid username or password");
    }
});

// Check if user is already logged in
if (sessionStorage.getItem("loggedIn")) {
    // Redirect to dashboard
    window.location.href = "login.html";
}
