 //assignment.js

// This function will show a pop-up message introducing Siya and her goals 
// to learn Javascript
function showSiyaIntroduction() {
    alert("Hello! My name is Siya! I am excited to learn Javascript at Nerahubs!\nMy goal is to become proficient in Javascript and build dynamic web applications, interactive client-side functionality, and engaging user experiences. Let's get started!");
}

// Call the function to show the pop-up message when the HTML document is loaded
// assignment.js

// This function will show a pop-up message introducing Siya and her goals to learn Javascript
function showSiyaIntroduction() {
    const name = prompt("Please enter your name:");
    const age = parseInt(prompt("Please enter your age:"));

    // Check the user's age and display appropriate messages
    if (isNaN(age)) {
        alert("Invalid age entered. Please enter a valid number.");
    } else {
        if (age >= 18) {
            alert("Welcome, " + name + "! Happy birthday!");
        } else {
            alert("Welcome, " + name + "! You are under 18. Please come back when you're older.");
        }
    }
}

// Call the function to show the pop-up message when the HTML document is loaded
window.onload = showSiyaIntroduction;



// This is to show the name and age of a user
const name = prompt("Please enter your name:");
const age = parseInt(prompt("Please enter your age:"));

// Check the user's age and display appropriate messages
if (isNaN(age)) {
  alert("Invalid age entered. Please enter a valid number.");
} else {
  if (age >= 18) {
    alert("Welcome, " + name + "! Happy birthday!");
  } else {
    alert("Welcome, " + name + "!");
  }
}


// Create an array containing 10 movie titles
const movies = [
  "Lovely Runner",
  "Romance is a bonus book",
  "The Goblin",
  "Tale of a nine-tailed fox",
  "Queen of Tears",
  "Welcome to Samdalri",
  "The Heirs",
  "My roommate is a Gumiho",
  "Nevertheless",
  "My happy ending"
];

// Iterate through the array using a for loop and log each movie title to the console
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}


// Define an object representing a book with properties like title, author, and genre
const book = {
  title: "Lovely Runner",
  author: "Kim Yoon-jin",
  genre: "Fantasy"
};

// Add a new property "pages" to the object
book.pages = 320;

// Display all the book details using object notation
console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Genre:", book.genre);
console.log("Pages:", book.pages);