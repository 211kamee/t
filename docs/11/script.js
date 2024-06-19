const monthName = document.getElementById("month");
const dayName = document.getElementById("day");
const dateName = document.getElementById("date");
const yearName = document.getElementById("year");

const today = new Date();

monthName.innerText = today.toLocaleString("en", { month:"long" });
dayName.innerText = today.toLocaleString("en", { weekday:"long" });
dateName.innerText = today.getDate();
yearName.innerText = today.getFullYear();