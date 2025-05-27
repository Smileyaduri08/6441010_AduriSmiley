const form = document.getElementById("registrationForm");
const errors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  eventSelect: document.getElementById("eventError"),
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  Object.values(errors).forEach(errEl => (errEl.textContent = ""));

  const { name, email, eventSelect } = form.elements;
  let valid = true;

  if (!name.value.trim() || name.value.trim().length < 2) {
    errors.name.textContent = "Please enter a valid name (at least 2 characters).";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    errors.email.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (!eventSelect.value) {
    errors.eventSelect.textContent = "Please select an event.";
    valid = false;
  }

  if (!valid) return;

  // Prepare data to send
  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: eventSelect.value,
  };

  // Show loading message
  alert("Submitting your registration...");

  // Simulate POST request with fetch and delayed response
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then(response => {
      // Simulate delay with setTimeout
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (response.ok) {
            resolve(response.json());
          } else {
            reject(new Error("Failed to submit"));
          }
        }, 2000); // 2 seconds delay
      });
    })
    .then(data => {
      alert(`Registration successful! Your ID is ${data.id}.`);
      form.reset();
    })
    .catch(error => {
      alert("Submission failed: " + error.message);
    });
});
