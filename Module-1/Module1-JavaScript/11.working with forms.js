<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Event Registration</title>
  <style>
    .error { color: red; font-size: 0.9em; }
  </style>
</head>
<body>
  <h1>Register for an Event</h1>

  <form id="registrationForm" novalidate>
    <div>
      <label for="name">Name:</label><br />
      <input type="text" id="name" name="name" />
      <div class="error" id="nameError"></div>
    </div>

    <div>
      <label for="email">Email:</label><br />
      <input type="email" id="email" name="email" />
      <div class="error" id="emailError"></div>
    </div>

    <div>
      <label for="eventSelect">Select Event:</label><br />
      <select id="eventSelect" name="eventSelect">
        <option value="">-- Select an event --</option>
        <option value="Music Fest">Music Fest</option>
        <option value="AI Bootcamp">AI Bootcamp</option>
        <option value="Art Gallery">Art Gallery</option>
      </select>
      <div class="error" id="eventError"></div>
    </div>

    <button type="submit">Register</button>
  </form>

  <script src="main.js"></script>
</body>
</html>
const form = document.getElementById("registrationForm");

// Error display elements
const errors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  eventSelect: document.getElementById("eventError"),
};

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Clear previous errors
  Object.values(errors).forEach(errEl => (errEl.textContent = ""));

  // Capture form inputs
  const { name, email, eventSelect } = form.elements;

  let valid = true;

  // Validate name (required, at least 2 chars)
  if (!name.value.trim() || name.value.trim().length < 2) {
    errors.name.textContent = "Please enter a valid name (at least 2 characters).";
    valid = false;
  }

  // Validate email (basic regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    errors.email.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Validate event selection
  if (!eventSelect.value) {
    errors.eventSelect.textContent = "Please select an event.";
    valid = false;
  }

  if (valid) {
    alert(`Thank you for registering, ${name.value}! You signed up for ${eventSelect.value}.`);
    form.reset(); // Reset form after successful submission
  }
});
