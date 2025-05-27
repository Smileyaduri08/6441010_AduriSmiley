<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Async Events</title>
</head>
<body>
  <h1>Community Events</h1>
  <div id="loader">Loading events...</div>
  <div id="events-container"></div>

  <script src="main.js"></script>
</body>
</html>
const container = document.querySelector("#events-container");
const loader = document.querySelector("#loader");

// Simulate fetching from a mock API (can replace with real URL)
function fetchEventsMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { name: "Virtual Yoga", date: "2025-07-01", seats: 10 },
        { name: "Dev Conference", date: "2025-07-10", seats: 0 }
      ];
      resolve(data);
    }, 2000);
  });
}

// Using .then() and .catch()
fetchEventsMock()
  .then(events => {
    loader.style.display = "none";
    renderEvents(events);
  })
  .catch(error => {
    loader.textContent = "Failed to load events.";
    console.error("Fetch error:", error);
  });

// Render events
function renderEvents(events) {
  events.forEach(event => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats > 0 ? event.seats : "Sold out"}</p>
    `;
    card.style.border = "1px solid #ccc";
    card.style.marginBottom = "10px";
    card.style.padding = "10px";
    container.appendChild(card);
  });
}
// Async version with try/catch
async function loadEvents() {
  try {
    const events = await fetchEventsMock();
    loader.style.display = "none";
    renderEvents(events);
  } catch (error) {
    loader.textContent = "Failed to load events.";
    console.error("Error fetching events:", error);
  }
}

loadEvents();
