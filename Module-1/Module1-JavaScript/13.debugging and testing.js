form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submission started");

  const { name, email, eventSelect } = form.elements;
  console.log("Input values:", {
    name: name.value,
    email: email.value,
    event: eventSelect.value,
  });

  // Validation steps...
  // After validation success:
  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: eventSelect.value,
  };
  console.log("User data to send:", userData);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then(response => {
      console.log("Fetch response status:", response.status);
      return response.json();
    })
    .then(data => {
      console.log("Fetch success data:", data);
      alert("Registration successful!");
      form.reset();
    })
    .catch(error => {
      console.error("Fetch error:", error);
      alert("Submission failed.");
    });
});
console.log(document.getElementById("name").value);
