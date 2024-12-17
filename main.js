// Current Date Display
const currentDate = new Date();
console.log("Current Date:", currentDate.toString());

console.log("")

// Current Date Sections Values Collected
const year = currentDate.getFullYear();
const month = currentDate.getMonth();  
const day = currentDate.getDate();
const dayOfWeek = currentDate.getDay(); 

// Current Date Sections Shown to Users
console.log("Date Indexed down by Year, Month, and Day")
console.log("Year:", year);
console.log("Month:", month);  
console.log("Day of the Month:", day);
console.log("Day of the Week:", dayOfWeek);

console.log("")

// Current Time Sections Values Collected
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Current Time Sections Shown to Users
console.log("Time Indexed by Hour, Minute, and Second")
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

console.log("")

const newYear2025 = new Date(2025, 1, 1);  
console.log("First Day of 2025:", newYear2025.toLocaleDateString());

const isBeforeChristmas2025 = currentDate < newYear2025;
console.log("Is current date before New Year's Day 2025?", isBeforeChristmas2025);

console.log("Formatted Current Date:", currentDate.toLocaleDateString(), currentDate.toLocaleTimeString());
