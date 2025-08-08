// --------- Registration Page ---------
if (document.getElementById("registerForm")) {
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration successful! Please login.");
    window.location.href = "index.html";
  });
}

// --------- Login Page ---------
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value.trim();
    let loginPassword = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (!storedEmail || !storedPassword) {
      alert("No user found. Please register first.");
      return;
    }

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}

