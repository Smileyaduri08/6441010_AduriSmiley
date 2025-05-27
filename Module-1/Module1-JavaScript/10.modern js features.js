// ✅ Default parameters, let & const
const createEvent = (name = "Untitled", date = "TBD", seats = 0, category = "General") => ({
  name,
  date,
  seats,
  category
});

// Initial event list
const events = [
  createEvent("Music Fest", "2025-06-10", 5, "Music"),
  createEvent("AI Bootcamp", "2025-06-20", 0, "Technology"),
  createEvent("Art Gallery", "2025-07-01", 10, "Art")
];

// ✅ Spread operator to safely clone array before filtering
const eventsCopy = [...events];
const availableEvents = eventsCopy.filter(({ seats }) => seats > 0);

// ✅ Destructuring in rendering logic
availableEvents.forEach(({ name, date, category, seats }) => {
  console.log(`📅 ${name} (${category}) on ${date} — Seats: ${seats}`);
});
