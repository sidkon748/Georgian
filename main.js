// Current Date Display
const currentDate = new Date();
console.log("Current Date:", currentDate.toString());

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

// Current Time Sections Values Collected
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Current Time Sections Shown to Users
console.log("Time Indexed by Hour, Minute, and Second")
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);