console.log("Hello World");
// Form Submission Logic COPIED FROM CANVAS PAGE
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

if (form) {
  // Ensure this runs only on pages with the form
  form.addEventListener("submit", (e) => {
    submitButton.disabled = true; // Disable the submit button
    e.preventDefault(); // Prevent form default behavior
    window.location.href = window.location.origin + "/success.html"; // Redirect to success page
  });
}

// Success Page Redirection Logic
if (window.location.pathname.includes("success.html")) {
  // Ensure this runs only on the success page
  setTimeout(() => {
    window.location.href = window.location.origin; // Redirect to home page
  }, 5000);
}
