const events = [
  { name: "Community Meetup", date: "2025-06-30", seats: 20 },
  { name: "Tech Talk", date: "2025-04-15", seats: 0 },
  { name: "Workshop", date: "2025-07-10", seats: 5 }
];

const today = new Date("2025-05-27"); // Simulated current date

// Loop through events and show only upcoming ones with available seats
events.forEach(event => {
  const eventDate = new Date(event.date);

  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming Event: ${event.name} on ${event.date} (${event.seats} seats)`);

    // Try to register
    try {
      registerUser(event);
    } catch (error) {
      console.error(`Error registering for ${event.name}: ${error.message}`);
    }

  } else {
    console.log(`Skipping ${event.name} — Past or Full`);
  }
});

// Registration logic
function registerUser(event) {
  if (event.seats <= 0) {
    throw new Error("No seats available");
  }
  event.seats--;
  console.log(`Registered successfully for ${event.name}. Seats left: ${event.seats}`);
}
