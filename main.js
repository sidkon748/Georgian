// Current Date Display
const currentDate = new Date();
console.log("Current Date:", currentDate.toString());

// Current Date Sections Displayed
console.log("Date Indexed down by Year, Month, and Day")
const year = currentDate.getFullYear();
const month = currentDate.getMonth();  
const day = currentDate.getDate();
const dayOfWeek = currentDate.getDay();  

// Current Time Sections Displayed
console.log("Time Indexed by Hour, Minute, and Second")
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();