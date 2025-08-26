document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  // Toggle between sign-in and sign-up forms
  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  // Form submission handlers
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Here you would typically send data to your backend
    console.log("Sign Up:", { name, email, password });

    // Show success message (in a real app, you'd handle the response)
    alert("Account created successfully! Please sign in.");
    container.classList.remove("right-panel-active");
    this.reset();
  });

  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;

    // Here you would typically authenticate with your backend
    console.log("Sign In:", { email, password });

    // Show success message (in a real app, you'd redirect or update UI)
    alert("Successfully signed in!");
    this.reset();

    // In a real app, you would redirect or update the UI here
    // window.location.href = '/dashboard';
  });

  // For demo purposes - in a real app you would use proper validation
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", function () {
      this.style.borderBottom = "2px solid #FF4B2B";
    });

    input.addEventListener("blur", function () {
      this.style.borderBottom = "none";
    });
  });
});
