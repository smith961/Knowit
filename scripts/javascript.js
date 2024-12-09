// Initialize Ace editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/javascript");

// Predefined content for modules
const modulesContent = [
    
    {
        title: "JavaScript Introduction",
        content: `
            <h3>Welcome to JavaScript Introduction</h3>
            <p>JavaScript is a versatile programming language primarily used for adding interactivity to web pages. It is lightweight and can be used for both client-side and server-side development.</p>
            
            <h3>Using <code>alert</code> to Display Messages</h3>
            <p>The <code>alert</code> method is used to display a pop-up message to the user. It pauses code execution until the user clicks "OK".</p>
            <p><strong>Example:</strong></p>
            <pre><code>alert("Welcome to JavaScript!");</code></pre>
            
            <h3>Using <code>console</code> for Debugging</h3>
            <p>The <code>console</code> object helps developers debug code by logging messages, warnings, and errors in the browser console.</p>
            <p><strong>Example:</strong></p>
            <pre><code>
    console.log("This is a log message.");
    console.warn("Warning: Proceed with caution!");
    console.error("Error: Something went wrong.");
            </code></pre>
            
            <h3>Accessing <code>window</code> Properties</h3>
            <p>The <code>window</code> object represents the browser window. It provides methods and properties to interact with the browser environment.</p>
            <p><strong>Example:</strong> Display the current URL and window dimensions:</p>
            <pre><code>
    console.log("Current URL: " + window.location.href);
    console.log("Window height: " + window.innerHeight + "px");
    console.log("Window width: " + window.innerWidth + "px");
            </code></pre>
            
            <h3>Interacting with Users</h3>
            <p>You can use <code>prompt</code> to ask the user for input and <code>alert</code> to display the response.</p>
            <p><strong>Example:</strong></p>
            <pre><code>
    let userName = prompt("What is your name?");
    alert("Hello, " + userName + "!");
            </code></pre>
            
            <h3>Exercise</h3>
            <p>Create a JavaScript program that asks the user for their favorite color and displays it in an alert.</p>
            <p>Log the user's response in the console.</p>
            <p>Modify the code to display the user's response dynamically on the webpage using <code>document.body.innerHTML</code>.</p>
            <pre><code>
    let hobby = prompt("What is your favorite hobby?");
    document.body.innerHTML = "<h1>Your favorite hobby is: " + hobby + "</h1>";
            </code></pre>
        `,
        exercise: `
            let userName = prompt("What is your name?");
            console.log("User's name: " + userName);
            alert("Welcome, " + userName + "!");
            let favoriteColor = prompt("What is your favorite color?");
            console.log("Favorite color: " + favoriteColor);
            alert("Your favorite color is " + favoriteColor + "!");
            document.body.innerHTML = "<h1>Hello, " + userName + "!</h1>";
        `
    },
    
    {
     title: "JavaScript Output",
     content: `
         <h3>JavaScript Output</h3>
         <p>JavaScript provides several ways to display output:</p>
         <ul>
             <li><code>document.write()</code>: Writes directly to the HTML document.</li>
             <li><code>console.log()</code>: Logs information to the browser's console (useful for debugging).</li>
             <li><code>alert()</code>: Displays a popup alert box.</li>
             <li><code>innerHTML</code>: Updates the content of an HTML element.</li>
         </ul>
         <p><strong>Example:</strong> Using <code>document.write()</code>:</p>
         <pre><code>
 document.write("Hello, World!");
         </code></pre>
         <p><strong>Exercise:</strong> Write a script that uses <code>alert()</code> to greet the user.</p>
     `,
     exercise:
      `alert("Welcome to JavaScript!");`
 },
 {
  title: "JavaScript Statements",
  content: `
      <h3>JavaScript Statements</h3>
      <p>A JavaScript program is a list of statements, executed by the browser in sequence.</p>
      <p>Each statement can perform an action, like assigning a value, calling a function, or making a decision.</p>
      <p><strong>Example:</strong> A simple JavaScript program:</p>
      <pre><code>
let x = 10; // Assignment statement
let y = 20;
let sum = x + y; // Expression statement
console.log(sum); // Output: 30
      </code></pre>
      <p><strong>Exercise:</strong> Write a script that declares two variables, multiplies them, and logs the result to the console.</p>
  `,
  exercise: `
let a = 5;
let b = 7;
console.log(a * b);
  `
},
{
 title: "JavaScript Syntax",
 content: `
     <h3>JavaScript Syntax</h3>
     <p>The syntax of JavaScript defines the set of rules for writing programs. It includes:</p>
     <ul>
         <li>Case sensitivity: Keywords, variables, and function names are case-sensitive.</li>
         <li>Semicolons: Optional but recommended at the end of each statement.</li>
         <li>Curly braces: Used to define code blocks.</li>
     </ul>
     <p><strong>Example:</strong> Valid JavaScript syntax:</p>
     <pre><code>
let x = 10; // Declare a variable
if (x > 5) { // Code block
 console.log("x is greater than 5");
}
     </code></pre>
     <p><strong>Exercise:</strong> Write an <code>if</code> statement that checks if a number is even or odd.</p>
 `,
 exercise: `
let num = 4;
if (num % 2 === 0) {
 console.log("Even");
} else {
 console.log("Odd");
}
 `
},
{
 title: "JavaScript Comments",
 content: `
     <h3>JavaScript Comments</h3>
     <p>Comments are used to explain code and make it more readable. JavaScript supports two types of comments:</p>
     <ul>
         <li><strong>Single-line comments</strong>: Start with <code>//</code>.</li>
         <li><strong>Multi-line comments</strong>: Enclosed within <code>/* */</code>.</li>
     </ul>
     <p><strong>Example:</strong></p>
     <pre><code>
// This is a single-line comment
let x = 5; /* This is a multi-line comment */
     </code></pre>
     <p><strong>Exercise:</strong> Add a single-line comment to describe a variable declaration and a multi-line comment to describe its purpose.</p>
 `,
 exercise: `
// Declares a variable
/* This variable will be used to store a user's name */
let userName = "John";
 `
},

    {
        title: "JavaScript Variables",
        content: `
            <h3>Understanding Variables</h3>
            <p>In JavaScript, variables are containers for storing data values. You can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>.</p>
            <p><strong>Example:</strong> Declaring variables and displaying their values:</p>
            <pre><code>
let name = "Alice";
document.body.innerHTML = "<h2>Name: " + name + "</h2>";
            </code></pre>
            <p><strong>Exercise:</strong> Declare a variable <code>favoriteColor</code> and display its value on the webpage.</p>
        `,
        exercise: `let favoriteColor = "Blue";\ndocument.body.innerHTML = "<p>My favorite color is " + favoriteColor + "</p>";`
    },
    {
     title: "JavaScript Arithmetic",
     content: `
         <h3>JavaScript Arithmetic</h3>
         <p>Arithmetic operators are used to perform mathematical operations:</p>
         <ul>
             <li><code>+</code>: Addition</li>
             <li><code>-</code>: Subtraction</li>
             <li><code>*</code>: Multiplication</li>
             <li><code>/</code>: Division</li>
             <li><code>%</code>: Modulus (Remainder)</li>
         </ul>
         <p><strong>Example:</strong> Performing basic arithmetic:</p>
         <pre><code>
 let x = 10;
 let y = 3;
 console.log("Sum: " + (x + y));
 console.log("Product: " + (x * y));
         </code></pre>
         <p><strong>Exercise:</strong> Write a script to calculate the square of a number using multiplication.</p>
     `,
     exercise: `
 let number = 5;
 let square = number * number;
 console.log("Square: " + square);
     `
 },
 {
  title: "JavaScript Data Types",
  content: `
      <h3>JavaScript Data Types</h3>
      <p>JavaScript has dynamic typing, meaning variables can hold different types of data:</p>
      <ul>
          <li><strong>Number</strong>: Represents numeric values (<code>10, 3.14</code>).</li>
          <li><strong>String</strong>: Represents text (<code>"Hello"</code>).</li>
          <li><strong>Boolean</strong>: Represents logical values (<code>true, false</code>).</li>
          <li><strong>Object</strong>: Represents complex data structures.</li>
          <li><strong>Undefined</strong>: A variable with no value.</li>
      </ul>
      <p><strong>Example:</strong> Declaring variables with different data types:</p>
      <pre><code>
let age = 25; // Number
let name = "Alice"; // String
let isStudent = true; // Boolean
      </code></pre>
      <p><strong>Exercise:</strong> Declare variables for your age, your name, and whether you are a student.</p>
  `,
  exercise: `
let age = 30;
let name = "John";
let isStudent = false;
console.log("Name: " + name + ", Age: " + age + ", Is Student: " + isStudent);
  `
},
    {
        title: "JavaScript Functions",
        content: `
            <h3>Defining Functions</h3>
            <p>Functions are blocks of code designed to perform a specific task. They are executed when "called" (invoked).</p>
            <p><strong>Example:</strong> A function to add two numbers and display the result:</p>
            <pre><code>
function addNumbers(a, b) {
    document.body.innerHTML = "<p>Sum: " + (a + b) + "</p>";
}
addNumbers(5, 7); // Output: Sum: 12
            </code></pre>
            <p><strong>Exercise:</strong> Create a function <code>multiplyNumbers</code> that multiplies two numbers and displays the result on the webpage.</p>
        `,
        exercise: `function multiplyNumbers(a, b) {\n    document.body.innerHTML = "<p>Product: " + (a * b) + "</p>";\n}\nmultiplyNumbers(4, 5);`
    },
    {
     title: "JavaScript Operators",
     content: `
         <h3>Understanding JavaScript Operators</h3>
         <p>JavaScript operators are used to perform operations on variables and values. There are several types of operators, including:</p>
         <ul>
             <li><strong>Arithmetic Operators:</strong> Used for calculations like addition, subtraction, multiplication, and division.</li>
             <li><strong>Assignment Operators:</strong> Assign values to variables.</li>
             <li><strong>Comparison Operators:</strong> Compare two values and return a boolean.</li>
         </ul>
         <p><strong>Example:</strong> Using arithmetic operators:</p>
         <pre><code>
let x = 10;
let y = 5;
let sum = x + y;
document.body.innerHTML = "<p>Sum: " + sum + "</p>";
         </code></pre>
         <p><strong>Exercise:</strong> Create a JavaScript program to calculate the product of two numbers and display the result on the webpage.</p>
     `,
     exercise: `let a = 6;\nlet b = 7;\ndocument.body.innerHTML = "<p>Product: " + (a * b) + "</p>";`
 },
 {
  title: "JavaScript Objects",
  content: `
      <h3>JavaScript Objects</h3>
      <p>Objects are used to store collections of data and key-value pairs.</p>
      <p>An object is defined using curly braces <code>{}</code> and properties are defined as key-value pairs:</p>
      <pre><code>
let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
console.log(person.name); // Output: Alice
      </code></pre>
      <p><strong>Exercise:</strong> Create an object for a car with properties <code>brand</code>, <code>model</code>, and <code>year</code>, then display its <code>brand</code>.</p>
  `,
  exercise: `
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
console.log("Car Brand: " + car.brand);
  `
},
{
 title: "JavaScript Events",
 content: `
     <h3>JavaScript Events</h3>
     <p>Events are actions or occurrences that happen in the browser, such as a user clicking a button or pressing a key.</p>
     <p>Event listeners are used to respond to these actions:</p>
     <pre><code>
document.getElementById("myButton").addEventListener("click", function() {
 alert("Button clicked!");
});
     </code></pre>
     <p><strong>Exercise:</strong> Add a button to the webpage that displays an alert when clicked.</p>
 `,
 exercise: `
let button = document.createElement("button");
button.innerText = "Click Me";
button.onclick = function() {
 alert("Hello from the button!");
};
document.body.appendChild(button);
 `
},
{
     title: "JavaScript Arrays",
     content: `
         <h3>Working with JavaScript Arrays</h3>
         <p>Arrays in JavaScript are used to store multiple values in a single variable. Arrays are zero-indexed, meaning the first element has an index of 0.</p>
         <p><strong>Example:</strong> Creating and accessing an array:</p>
         <pre><code>
let fruits = ["Apple", "Banana", "Cherry"];
document.body.innerHTML = "<p>First fruit: " + fruits[0] + "</p>";
         </code></pre>
         <p><strong>Exercise:</strong> Create an array of three numbers and display their sum on the webpage.</p>
     `,
     exercise: `let numbers = [10, 20, 30];\nlet sum = numbers.reduce((a, b) => a + b, 0);\ndocument.body.innerHTML = "<p>Sum of numbers: " + sum + "</p>";`
 },
 {
  title: "JavaScript Strings",
  content: `
      <h3>JavaScript Strings</h3>
      <p>Strings are used to represent text. They are enclosed in either single or double quotes.</p>
      <p><strong>Example:</strong> String operations:</p>
      <pre><code>
let greeting = "Hello, ";
let name = "Alice";
console.log(greeting + name); // Output: Hello, Alice
      </code></pre>
      <p><strong>Exercise:</strong> Create a string that combines "JavaScript" and "is fun!".</p>
  `,
  exercise: `
let str1 = "JavaScript";
let str2 = "is fun!";
console.log(str1 + " " + str2);
  `
},
{
 title: "JavaScript Math",
 content: `
     <h3>JavaScript Math</h3>
     <p>The Math object provides methods for mathematical operations.</p>
     <p><strong>Example:</strong> Using Math methods:</p>
     <pre><code>
let squareRoot = Math.sqrt(16); // 4
let power = Math.pow(2, 3); // 8
console.log(squareRoot, power);
     </code></pre>
     <p><strong>Exercise:</strong> Use Math to find the cube root of 27.</p>
 `,
 exercise: `
let cubeRoot = Math.cbrt(27);
console.log("Cube root: " + cubeRoot);
 `
},
{
 title: "JavaScript Random",
 content: `
     <h3>JavaScript Random</h3>
     <p>Generate random numbers using <code>Math.random()</code>.</p>
     <p><strong>Example:</strong> Generate a random number:</p>
     <pre><code>
let randomNumber = Math.random();
console.log(randomNumber);
     </code></pre>
     <p><strong>Exercise:</strong> Generate a random integer between 1 and 10.</p>
 `,
 exercise: `
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random Integer: " + randomInt);
 `
},
{
 title: "JavaScript Loops",
 content: `
     <h3>Understanding JavaScript Loops</h3>
     <p>Loops are used to execute a block of code multiple times. JavaScript supports several types of loops:</p>
     <ul>
         <li><strong>for</strong>: Loops through a block of code a number of times.</li>
         <li><strong>while</strong>: Loops through a block of code as long as a condition is true.</li>
         <li><strong>do...while</strong>: Similar to <code>while</code>, but executes the block at least once.</li>
     </ul>
     <p><strong>Example:</strong> Using a <code>for</code> loop to iterate through numbers:</p>
     <pre><code>
for (let i = 1; i <= 5; i++) {
 document.body.innerHTML += "<p>Number: " + i + "</p>";
}
     </code></pre>
     <p><strong>Exercise:</strong> Write a JavaScript program using a <code>for</code> loop to display all even numbers between 1 and 10.</p>
 `,
 exercise: `for (let i = 1; i <= 10; i++) {\n    if (i % 2 === 0) {\n        document.body.innerHTML += "<p>Even Number: " + i + "</p>";\n    }\n}`
},

{
 title: "JavaScript Hoisting",
 content: `
     <h3>JavaScript Hoisting</h3>
     <p>Hoisting allows variables and function declarations to be used before they are declared.</p>
     <p><strong>Example:</strong> Hoisting in JavaScript:</p>
     <pre><code>
console.log(a); // undefined
var a = 5;
     </code></pre>
     <p><strong>Exercise:</strong> Write a script to test hoisting with a function declaration.</p>
 `,
 exercise: `
console.log(myFunction());

function myFunction() {
 return "Hoisting is working!";
}
 `
},
{
 title: "JavaScript DOM Manipulation",
 content: `
     <h3>JavaScript DOM Manipulation</h3>
     <p>Use JavaScript to dynamically change HTML content.</p>
     <p><strong>Example:</strong> Change an element's text:</p>
     <pre><code>
document.getElementById("demo").innerText = "Hello, DOM!";
     </code></pre>
     <p><strong>Exercise:</strong> Add a new paragraph to the page dynamically.</p>
 `,
 exercise: `
let para = document.createElement("p");
para.textContent = "This is a new paragraph.";
document.body.appendChild(para);
 `
},
{
 title: "JavaScript Arrow Functions",
 content: `
     <h3>JavaScript Arrow Functions</h3>
     <p>Arrow functions provide a concise syntax for writing functions.</p>
     <p><strong>Example:</strong> Using an arrow function:</p>
     <pre><code>
let add = (a, b) => a + b;
console.log(add(5, 3)); // 8
     </code></pre>
     <p><strong>Exercise:</strong> Write an arrow function to multiply two numbers.</p>
 `,
 exercise: `
let multiply = (a, b) => a * b;
console.log("Product: " + multiply(4, 6));
 `
},
{
 title: "JavaScript Async/Await",
 content: `
     <h3>JavaScript Async/Await</h3>
     <p>Async functions allow you to write asynchronous code in a synchronous manner.</p>
     <p><strong>Example:</strong> Using async/await:</p>
     <pre><code>
async function fetchData() {
 let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
 let data = await response.json();
 console.log(data);
}
fetchData();
     </code></pre>
     <p><strong>Exercise:</strong> Fetch a user's data from a placeholder API and log their name.</p>
 `,
 exercise: `
async function fetchUser() {
 let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
 let user = await response.json();
 console.log("User Name: " + user.name);
}
fetchUser();
 `
},
{
 title: "JavaScript Debugging",
 content: `
     <h3>JavaScript Debugging</h3>
     <p>Debugging helps you find and fix errors in your code. Use <code>console.log</code>, breakpoints, and tools like the browser's developer tools.</p>
     <p><strong>Example:</strong> Debugging with console:</p>
     <pre><code>
let x = 10;
console.log("Value of x: " + x);
     </code></pre>
     <p><strong>Exercise:</strong> Use <code>console.log</code> to debug a function that adds two numbers.</p>
 `,
 exercise: `
function add(a, b) {
 console.log("a:", a, "b:", b);
 return a + b;
}
console.log(add(5, 7));
 `
}

];

let currentModuleIndex = 0;

// Populate the sidebar with modules
function populateSidebar() {
    const moduleList = document.getElementById("module-list");
    moduleList.innerHTML = ""; // Clear any existing content
    modulesContent.forEach((module, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${module.title}</a>`;
        li.onclick = () => loadModule(index);
        moduleList.appendChild(li);
    });
}

// Load a module
function loadModule(index) {
    currentModuleIndex = index;
    const module = modulesContent[index];
    document.getElementById("module-title").innerText = module.title;
    document.getElementById("module-content").innerHTML = module.content;
    editor.setValue(module.exercise, -1); // Load the exercise into the editor
}

// Preview code in the iframe
function previewCode() {
    const userCode = editor.getValue();
    const iframe = document.getElementById("preview-frame");
    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Preview</title>
            <style>body { font-family: Arial, sans-serif; }</style>
        </head>
        <body>
            <script>
                try {
                    ${userCode}
                } catch (error) {
                    document.body.innerHTML = '<p style="color: red;">Error: ' + error.message + '</p>';
                }
            </script>
        </body>
        </html>
    `);
    iframeDoc.close();
}

// Navigate modules
function navigateModule(direction) {
    if (direction === "previous" && currentModuleIndex > 0) {
        loadModule(currentModuleIndex - 1);
    } else if (direction === "next" && currentModuleIndex < modulesContent.length - 1) {
        loadModule(currentModuleIndex + 1);
    }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    populateSidebar();
    loadModule(currentModuleIndex);
});