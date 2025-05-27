// ✅ Event constructor function
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

// ✅ Add method to prototype
Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Seats available" : "Sold out";
};

// ✅ Create event instances
const event1 = new Event("JS Conference", "2025-06-20", 50);
const event2 = new Event("Design Sprint", "2025-05-15", 0);

// ✅ Check availability
console.log(`${event1.name}: ${event1.checkAvailability()}`);
console.log(`${event2.name}: ${event2.checkAvailability()}`);

// ✅ List keys and values using Object.entries()
console.log("Event 1 Details:");
Object.entries(event1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// ✅ ES6 class version
class Event {
  constructor(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
  }

  checkAvailability() {
    return this.seats > 0 ? "Seats available" : "Sold out";
  }
}

// Usage same as above
