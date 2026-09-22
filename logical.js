let number = -5;

if (number >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

let number2 = 8;

if (number2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let score = 65;

if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

let a = 20;
let b = 15;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

let score2 = 75;

if (score2 >= 70) {
  console.log("A");
} else if (score2 >= 60) {
  console.log("B");
} else if (score2 >= 50) {
  console.log("C");
} else if (score2 >= 40) {
  console.log("D");
} else {
  console.log("F");
}

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

let age2 = 20;

if (age2 >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

let a2 = 10;
let b2 = 25;
let c2 = 15;

if (a2 > b2 && a2 > c2) {
  console.log(a2);
} else if (b2 > a2 && b2 > c2) {
  console.log(b2);
} else {
  console.log(c2);
}

let temperature = 35;

if (temperature > 30) {
  console.log("Hot");
} else if (temperature >= 20) {
  console.log("Warm");
} else {
  console.log("Cold");
}

let age3 = 22;
let hasTicket = true;

if (age3 >= 18 && hasTicket === true) {
  console.log("You can enter");
} else {
  console.log("You cannot enter");
}

let username2 = "ayo";
let password2 = "1234";

if (username2 === "ayo" && password2 === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

let age4 = 65;
let isStudent = false;

if (age4 >= 60 || isStudent === true) {
  console.log("Discount available");
} else {
  console.log("No discount");
}

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn === true && isAdmin === true) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

let password3 = "javascript";

if (password3.length >= 8) {
  console.log("Password is long enough");
} else {
  console.log("Password is too short");
}

let email = "ayo@gmail.com";

if (email.includes("@")) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}

let username3 = "ayodev";

if (username3.length >= 5 && !username3.includes(" ")) {
  console.log("Valid username");
} else {
  console.log("Invalid username");
}

let password4 = "hello123";

if (password4.length < 6) {
  console.log("Weak");
} else if (password4.length <= 9) {
  console.log("Medium");
} else {
  console.log("Strong");
}

let word = "javascript";

if (word.includes("script")) {
  console.log("The word contains script");
} else {
  console.log("The word does not contain script");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 24

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log(sum);
