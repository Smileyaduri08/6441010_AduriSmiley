<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Community Events</title>
</head>
<body>
  <h1>Upcoming Events</h1>
  <div id="events-container"></div>

  <script src="main.js"></script>
</body>
</html>
// Sample events array
const events = [
  { name: "Music Fest", date: "2025-06-10", seats: 5 },
  { name: "Coding Bootcamp", date: "2025-06-20", seats: 3 }
];

// Access DOM element
const container = document.querySelector("#events-container");

// Function to render all events
function renderEvents() {
  container.innerHTML = ""; // Clear existing content

  events.forEach((event, index) => {
    // Create event card
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats Available: <span id="seats-${index}">${event.seats}</span></p>
      <button id="register-${index}">Register</button>
      <button id="cancel-${index}">Cancel</button>
    `;

    // Append card to container
    container.appendChild(card);

    // Add event listeners
    document.querySelector(`#register-${index}`).onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        updateSeats(index);
      } else {
        alert("No seats available!");
      }
    };

    document.querySelector(`#cancel-${index}`).onclick = () => {
      event.seats++;
      updateSeats(index);
    };
  });
}

// U
