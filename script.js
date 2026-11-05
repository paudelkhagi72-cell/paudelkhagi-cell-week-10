let userName = prompt("Please enter your name:");
let currentHour = new Date().getHours();
let greeting = "";

if (currentHour < 12) {
    greeting = `Good morning, ${userName}!`;
} else if (currentHour < 18) {
    greeting = `Good afternoon, ${userName}!`;
} else {
    greeting = `Good evening, ${userName}!`;
}

console.log(greeting);

let birthYear = prompt("Please enter your birth year:");
let age = 2026 - Number(birthYear);
let daysLived = age * 365;

console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}