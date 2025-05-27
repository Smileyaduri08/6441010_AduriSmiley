// Event list
let events = [];

// ✅ Function to add a new event
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

// ✅ Function to register a user for an event
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (!event) {
    console.error("Event not found");
    return;
  }
  if (event.seats <= 0) {
    console.warn("No seats available");
    return;
  }
  event.seats--;
  console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
}

// ✅ Closure to track total registrations per category
function createCategoryTracker(category) {
  let registrations = 0;
  return function register() {
    registrations++;
    console.log(`Total registrations for ${category}: ${registrations}`);
  };
}

// ✅ Higher-order function to filter events using a callback
function filterEvents(callback) {
  return events.filter(callback);
}

// ✅ Setup: Add sample events
addEvent("Tech Talk", "2025-06-01", 10, "Technology");
addEvent("Health Workshop", "2025-06-05", 5, "Health");
addEvent("AI Summit", "2025-06-10", 0, "Technology");

// ✅ Use closure for Technology category tracking
const techTracker = createCategoryTracker("Technology");

// ✅ Register a few users
registerUser("Tech Talk");
techTracker();
registerUser("Tech Talk");
techTracker();

// ✅ Filter by category using a callback
const techEvents = filterEvents(e => e.category === "Technology" && e.seats > 0);
console.log("Available Technology Events:", techEvents);
