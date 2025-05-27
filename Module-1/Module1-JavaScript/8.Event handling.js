<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Community Events</title>
</head>
<body>
  <h1>Community Events</h1>

  <!-- Filter Dropdown -->
  <label for="categoryFilter">Filter by Category:</label>
  <select id="categoryFilter">
    <option value="All">All</option>
    <option value="Music">Music</option>
    <option value="Technology">Technology</option>
    <option value="Art">Art</option>
  </select>

  <!-- Search Input -->
  <input type="text" id="searchInput" placeholder="Search by event name" />

  <!-- Events List -->
  <div id="events-container"></div>

  <script src="main.js"></script>
</body>
</html>
// Sample event data
let events = [
  { name: "Music Fest", category: "Music", date: "2025-06-10", seats: 5 },
  { name: "AI Bootcamp", category: "Technology", date: "2025-06-20", seats: 3 },
  { name: "Painting 101", category: "Art", date: "2025-07-01", seats: 2 }
];

const container = document.querySelector("#events-container");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

// Render events to the DOM
function renderEvents(filteredEvents) {
  container.innerHTML = "";
  filteredEvents.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Date: ${event.date}</p>
      <p>Seats: <span id="seats-${index}">${event.seats}</span></p>
      <button id="register-${index}">Register</button>
    `;

    container.appendChild(card);

    // ✅ Event handler for "Register" button
    document.querySelector(`#register-${index}`).onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        document.querySelector(`#seats-${index}`).textContent = event.seats;
      } else {
        alert("No seats available!");
      }
    };
  });
}

// Filter logic
function filterAndRender() {
  const selectedCategory = categoryFilter.value;
  const searchText = searchInput.value.toLowerCase();

  const filtered = events.filter(event =>
    (selectedCategory === "All" || event.category === selectedCategory) &&
    event.name.toLowerCase().includes(searchText)
  );

  renderEvents(filtered);
}

// ✅ Filter by category using onchange
categoryFilter.onchange = filterAndRender;

// ✅ Search by name using keydown
searchInput.addEventListener("keydown", () => {
  // Use setTimeout to allow input value update before filtering
  setTimeout(filterAndRender, 0);
});

// Initial render
renderEvents(events);
