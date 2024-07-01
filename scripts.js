function togglePassword(fieldId) {
  const passwordInput = document.getElementById(fieldId);
  const icon = passwordInput.nextElementSibling;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.textContent = "🙈"; // Change to a "hide" icon
  } else {
    passwordInput.type = "password";
    icon.textContent = "👁️"; // Change back to a "show" icon
  }
}

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorDiv = document.getElementById("error");

    // Basic validation
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      errorDiv.textContent = "Please fill in all fields.";
    } else if (password !== confirmPassword) {
      errorDiv.textContent = "Passwords do not match.";
    } else {
      // Here you would normally send the data to the server for validation
      // For this example, we'll just display a success message
      errorDiv.textContent = "";
      alert("Sign up successful!");
    }
  });
