// Use const for fixed values
const eventName = "Community Meetup";
const eventDate = "2025-06-15";

// Use let for a value that can change
let availableSeats = 50;

// Concatenate event info using template literals
const eventInfo = `Event: ${eventName}\nDate: ${eventDate}\nAvailable Seats: ${availableSeats}`;
console.log(eventInfo);

// Simulate a registration (decrease seat count)
availableSeats--;

// Log updated seats
console.log(`Seats after registration: ${availableSeats}`);
