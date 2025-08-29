function showSignup() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

function loginUser() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      // Just a simple check for demo
      if(user === "admin@gmail.com" && pass === "1234"){
        window.location.href = "responsive car web site\index.html"; // Go to home page
        return false;
      } else {
        alert("Invalid login details!");
        return false;
      }
}