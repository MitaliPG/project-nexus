function togglePassword() {
  const passwordInput = document.getElementById("password");
  const icon = document.querySelector(".toggle-password .icon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.textContent = "🙈"; // Change to a "hide" icon
  } else {
    passwordInput.type = "password";
    icon.textContent = "👁️"; // Change back to a "show" icon
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;
    var errorDiv = document.getElementById("error");

    // Basic validation
    if (username === "" || password === "") {
      errorDiv.textContent = "Please fill in all fields.";
    } else {
      // Here you would normally send the data to the server for validation
      // For this example, we'll just display a success message
      errorDiv.textContent = "";
      alert("Login successful!");

      // Example of handling "Remember Me"
      if (rememberMe) {
        // Store username in localStorage
        localStorage.setItem("username", username);
      } else {
        // Clear stored username
        localStorage.removeItem("username");
      }
    }
  });

// Load stored username if "Remember Me" was checked
window.addEventListener("load", function () {
  var storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    document.getElementById("username").value = storedUsername;
    document.getElementById("rememberMe").checked = true;
  }
});
