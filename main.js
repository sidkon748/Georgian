// Current Date Display
const currentDate = new Date();
console.log("Current Date:", currentDate.toString());

// Current Date Sections Displayed
console.log("Date Indexed down by Year, Month, and Day")
const year = currentDate.getFullYear();
const month = currentDate.getMonth();  
const day = currentDate.getDate();
const dayOfWeek = currentDate.getDay();  