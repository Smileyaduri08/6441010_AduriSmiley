// ✅ Initial array of events
let events = [
  { name: "Jazz Night", category: "Music" },
  { name: "AI Conference", category: "Technology" },
  { name: "Workshop on Baking", category: "Cooking" }
];

// ✅ 1. Add new events using .push()
events.push(
  { name: "Rock Concert", category: "Music" },
  { name: "Photography Basics", category: "Art" }
);

// ✅ 2. Use .filter() to show only music events
const musicEvents = events.filter(event => event.category === "Music");
console.log("🎵 Music Events:", musicEvents);

// ✅ 3. Use .map() to format display cards
const displayCards = events.map(event => `📌 ${event.name} [${event.category}]`);
console.log("🗂 Event Cards:\n", displayCards.join("\n"));
