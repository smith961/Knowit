document.addEventListener("DOMContentLoaded", () => {
 const exercises = {
     "JavaScript Introduction": [
         {
             "title": "Exercise 1: Display a Message",
             "task": "Write JavaScript code to display 'Hello, JavaScript!' inside the div element using `innerHTML`.",
             "predefinedCode": `
             <div id="output"></div>
             <script>
                 // Add your JavaScript code here
             </script>
             `,
             "solutionCode": `
             <div id="output"></div>
             <script>
                 document.getElementById("output").innerHTML = "Hello, JavaScript!";
             </script>
             `
         },
         {
             "title": "Exercise 2: Simple Addition",
             "task": "Write JavaScript code to calculate the sum of 5 and 3, and display the result inside the div element using `innerHTML`.",
             "predefinedCode": `
             <div id="output"></div>
             <script>
                 // Add your JavaScript code here
             </script>
             `,
             "solutionCode": `
             <div id="output"></div>
             <script>
                 const sum = 5 + 3;
                 document.getElementById("output").innerHTML = sum;
             </script>
             `
         }
     ],
     "JavaScript Output": [
    {
        "title": "Exercise 1: Display a Message in Console",
        "task": "Write JavaScript code to display 'Welcome to JavaScript!' in the browser's console using `console.log()`.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            console.log("Welcome to JavaScript!");
        </script>
        `
    },
    {
        "title": "Exercise 2: Display Message on Webpage",
        "task": "Write JavaScript code to display 'This is JavaScript!' inside an HTML element with the id 'output'.",
        "predefinedCode": `
        <div id="output"></div>
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <div id="output"></div>
        <script>
            document.getElementById("output").innerHTML = "This is JavaScript!";
        </script>
        `
    }
],

"JavaScript Statements": [
    {
        "title": "Exercise 1: Basic Assignment",
        "task": "Write JavaScript code to assign the value 10 to a variable named 'x'. Then, display the value of 'x' in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let x = 10;
            console.log(x);
        </script>
        `
    },
    {
        "title": "Exercise 2: Simple Condition",
        "task": "Write JavaScript code to check if a variable 'age' is greater than 18. If true, log 'Adult' to the console, otherwise log 'Minor'.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let age = 20;
            if (age > 18) {
                console.log("Adult");
            } else {
                console.log("Minor");
            }
        </script>
        `
    }
],

"JavaScript Syntax": [
    {
        "title": "Exercise 1: Correct Syntax",
        "task": "Write JavaScript code to declare a variable 'greeting' and assign the value 'Hello, World!' to it. Then, display the value in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let greeting = "Hello, World!";
            console.log(greeting);
        </script>
        `
    },
    {
        "title": "Exercise 2: Syntax Errors",
        "task": "Write JavaScript code to create a variable 'number' and assign the value 25. Then, log the value of 'number' in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let number = 25;
            console.log(number);
        </script>
        `
    }
],

"JavaScript Comments": [
    {
        "title": "Exercise 1: Using Single-Line Comments",
        "task": "Write JavaScript code that contains a single-line comment describing the purpose of the following line of code: `let x = 5;`.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            // Assign 5 to the variable x
            let x = 5;
        </script>
        `
    },
    {
        "title": "Exercise 2: Using Multi-Line Comments",
        "task": "Write JavaScript code that contains a multi-line comment explaining the following code snippet: \`let sum = a + b;\`.",
        "predefinedCode": `
        <script>
            /* Add your JavaScript code here */
        </script>
        `,
        "solutionCode": `
        <script>
            /* 
            This line calculates the sum of a and b 
            and stores the result in the variable 'sum'.
            */
            let sum = a + b;
        </script>
        `
    }
],
"JavaScript Variables": [
    {
        "title": "Exercise 1: Declare and Assign Variables",
        "task": "Declare a variable `name` and assign your name to it. Then, display it in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let name = "John";
            console.log(name);
        </script>
        `
    },
    {
        "title": "Exercise 2: Variable Reassignment",
        "task": "Declare a variable `age`, assign a value of 25 to it, and then reassign the value to 26. Display both values in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let age = 25;
            console.log(age); // Output: 25
            age = 26;
            console.log(age); // Output: 26
        </script>
        `
    }
],

"JavaScript Operators": [
    {
        "title": "Exercise 1: Using Arithmetic Operators",
        "task": "Write JavaScript code to calculate the sum, difference, product, and quotient of two numbers (5 and 3). Display the results in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let a = 5, b = 3;
            console.log(a + b); // Sum: 8
            console.log(a - b); // Difference: 2
            console.log(a * b); // Product: 15
            console.log(a / b); // Quotient: 1.666...
        </script>
        `
    },
    {
        "title": "Exercise 2: Using Comparison Operators",
        "task": "Write JavaScript code to compare two numbers (10 and 20) using comparison operators and log the results to the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let x = 10, y = 20;
            console.log(x == y); // false
            console.log(x != y); // true
            console.log(x > y); // false
            console.log(x < y); // true
            console.log(x >= y); // false
            console.log(x <= y); // true
        </script>
        `
    }
],

"JavaScript Arithmetic": [
    {
        "title": "Exercise 1: Calculating the Area of a Rectangle",
        "task": "Write JavaScript code to calculate the area of a rectangle with length 5 and width 3. Display the result in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let length = 5, width = 3;
            let area = length * width;
            console.log(area); // Output: 15
        </script>
        `
    },
    {
        "title": "Exercise 2: Increment and Decrement",
        "task": "Write JavaScript code to increment a variable `counter` by 1 and then decrement it by 1. Display the value of `counter` before and after each operation.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let counter = 0;
            console.log(counter); // Output: 0
            counter++;
            console.log(counter); // Output: 1
            counter--;
            console.log(counter); // Output: 0
        </script>
        `
    }
],

"JavaScript Data Types": [
    {
        "title": "Exercise 1: Identifying Data Types",
        "task": "Write JavaScript code that assigns values of different types (string, number, boolean, array, object) to variables. Use `typeof` to log their types in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let str = "Hello, world!";
            let num = 42;
            let bool = true;
            let arr = [1, 2, 3];
            let obj = { name: "John", age: 25 };

            console.log(typeof str); // string
            console.log(typeof num); // number
            console.log(typeof bool); // boolean
            console.log(typeof arr); // object (arrays are a type of object)
            console.log(typeof obj); // object
        </script>
        `
    },
    {
        "title": "Exercise 2: Type Conversion",
        "task": "Write JavaScript code that converts a string '123' to a number and a number 456 to a string. Display both results in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let str = '123';
            let num = 456;

            let numFromStr = Number(str);  // Convert string to number
            let strFromNum = num.toString();  // Convert number to string

            console.log(numFromStr);  // Output: 123
            console.log(strFromNum);  // Output: "456"
        </script>
        `
    }
],

"JavaScript Functions": [
    {
        "title": "Exercise 1: Defining a Function",
        "task": "Write a JavaScript function named `greet` that takes a `name` as a parameter and logs 'Hello, `name`!' to the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            function greet(name) {
                console.log("Hello, " + name + "!");
            }

            greet("John");  // Output: Hello, John!
        </script>
        `
    },
    {
        "title": "Exercise 2: Function with Return Value",
        "task": "Write a JavaScript function named `sum` that takes two numbers as parameters, adds them together, and returns the result. Display the result of calling `sum(5, 3)` in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            function sum(a, b) {
                return a + b;
            }

            console.log(sum(5, 3));  // Output: 8
        </script>
        `
    }
],
"JavaScript Objects": [
    {
        "title": "Exercise 1: Creating an Object",
        "task": "Create an object named `person` with properties `name` (a string) and `age` (a number). Log the object to the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let person = {
                name: "John",
                age: 25
            };
            console.log(person);
        </script>
        `
    },
    {
        "title": "Exercise 2: Accessing Object Properties",
        "task": "Access and log the `name` and `age` properties of the `person` object.",
        "predefinedCode": `
        <script>
            let person = {
                name: "John",
                age: 25
            };
            // Add your code here
        </script>
        `,
        "solutionCode": `
        <script>
            let person = {
                name: "John",
                age: 25
            };
            console.log(person.name); // John
            console.log(person.age);  // 25
        </script>
        `
    }
],

"JavaScript Events": [
    {
        "title": "Exercise 1: Button Click Event",
        "task": "Write JavaScript code to display 'Button clicked!' in the console when a button is clicked.",
        "predefinedCode": `
        <button id="myButton">Click me</button>
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <button id="myButton">Click me</button>
        <script>
            document.getElementById("myButton").addEventListener("click", function() {
                console.log("Button clicked!");
            });
        </script>
        `
    },
    {
        "title": "Exercise 2: Change Event",
        "task": "Write JavaScript code to display the value of an input field in the console whenever it changes.",
        "predefinedCode": `
        <input type="text" id="myInput" />
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <input type="text" id="myInput" />
        <script>
            document.getElementById("myInput").addEventListener("change", function(event) {
                console.log(event.target.value);
            });
        </script>
        `
    }
],

"JavaScript Strings": [
    {
        "title": "Exercise 1: String Length",
        "task": "Write JavaScript code to find and log the length of the string 'Hello, World!'.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let str = "Hello, World!";
            console.log(str.length); // Output: 13
        </script>
        `
    },
    {
        "title": "Exercise 2: String Methods",
        "task": "Write JavaScript code to convert the string 'javascript' to uppercase and log the result.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let str = "javascript";
            console.log(str.toUpperCase()); // Output: JAVASCRIPT
        </script>
        `
    }
],

"JavaScript Math": [
    {
        "title": "Exercise 1: Math Operations",
        "task": "Use the `Math` object to find and log the square root of 16.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            console.log(Math.sqrt(16)); // Output: 4
        </script>
        `
    },
    {
        "title": "Exercise 2: Math Constants",
        "task": "Write JavaScript code to log the value of π (PI) using the `Math` object.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            console.log(Math.PI); // Output: 3.141592653589793
        </script>
        `
    }
],

"JavaScript Random": [
    {
        "title": "Exercise 1: Random Number",
        "task": "Write JavaScript code to generate and log a random number between 0 and 1 using the `Math.random()` method.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            console.log(Math.random());
        </script>
        `
    },
    {
        "title": "Exercise 2: Random Integer",
        "task": "Write JavaScript code to generate a random integer between 1 and 10.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            let randomInt = Math.floor(Math.random() * 10) + 1;
            console.log(randomInt);
        </script>
        `
    }
],

"JavaScript Hoisting": [
    {
        "title": "Exercise 1: Hoisting Example",
        "task": "Write JavaScript code that declares a variable after using it. Log the variable to understand hoisting.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            console.log(myVar); // Output: undefined (due to hoisting)
            var myVar = 10;
        </script>
        `
    },
    {
        "title": "Exercise 2: Function Hoisting",
        "task": "Write JavaScript code to call a function before it is declared. Observe the behavior in the console.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            greet(); // Output: Hello!

            function greet() {
                console.log("Hello!");
            }
        </script>
        `
    }
],
"JavaScript Arrow Functions": [
    {
        "title": "Exercise 1: Simple Arrow Function",
        "task": "Write an arrow function named `greet` that takes no arguments and returns 'Hello!'. Call the function and log its result.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            const greet = () => "Hello!";
            console.log(greet()); // Output: Hello!
        </script>
        `
    },
    {
        "title": "Exercise 2: Arrow Function with Parameters",
        "task": "Write an arrow function named `add` that takes two parameters and returns their sum. Call the function with 5 and 3, and log the result.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            const add = (a, b) => a + b;
            console.log(add(5, 3)); // Output: 8
        </script>
        `
    }
],

"JavaScript Async": [
    {
        "title": "Exercise 1: Async Function",
        "task": "Write an async function named `fetchData` that logs 'Fetching data...' immediately, waits for 2 seconds, then logs 'Data fetched!'.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            const fetchData = async () => {
                console.log("Fetching data...");
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log("Data fetched!");
            };
            fetchData();
        </script>
        `
    },
    {
        "title": "Exercise 2: Using Fetch API",
        "task": "Use `fetch` to get JSON data from 'https://jsonplaceholder.typicode.com/posts/1' and log the title of the post.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then(data => console.log(data.title));
        </script>
        `
    }
],

"JavaScript HTML DOM": [
    {
        "title": "Exercise 1: Changing Text",
        "task": "Use JavaScript to change the text inside a `<p>` element with id 'demo' to 'DOM Manipulation is fun!'.",
        "predefinedCode": `
        <p id="demo">Original text</p>
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <p id="demo">Original text</p>
        <script>
            document.getElementById("demo").textContent = "DOM Manipulation is fun!";
        </script>
        `
    },
    {
        "title": "Exercise 2: Adding Elements",
        "task": "Write JavaScript code to create a new `<li>` element with text 'New Item' and append it to a `<ul>` with id 'list'.",
        "predefinedCode": `
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        <script>
            const newItem = document.createElement("li");
            newItem.textContent = "New Item";
            document.getElementById("list").appendChild(newItem);
        </script>
        `
    }
],

"JavaScript Classes": [
    {
        "title": "Exercise 1: Creating a Class",
        "task": "Create a class named `Person` with a constructor that sets `name` and `age`. Instantiate an object and log its properties.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
            }
            const person = new Person("Alice", 30);
            console.log(person.name); // Output: Alice
            console.log(person.age);  // Output: 30
        </script>
        `
    },
    {
        "title": "Exercise 2: Adding Methods",
        "task": "Add a method `introduce` to the `Person` class that logs 'Hi, I am [name] and I am [age] years old.'. Call the method.",
        "predefinedCode": `
        <script>
            class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                // Add your method here
            }
            const person = new Person("Alice", 30);
            person.introduce();
        </script>
        `,
        "solutionCode": `
        <script>
            class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                introduce() {
                    console.log(\`Hi, I am \${this.name} and I am \${this.age} years old.\`);
                }
            }
            const person = new Person("Alice", 30);
            person.introduce();
        </script>
        `
    }
],

"JavaScript Modules": [
    {
        "title": "Exercise 1: Exporting and Importing",
        "task": "Create a module file `math.js` that exports a function `add(a, b)`. Import it in another file and use the function.",
        "predefinedCode": `
        // In math.js
        export const add = (a, b) => a + b;

        // In main.js
        import { add } from './math.js';
        console.log(add(5, 3));
        `,
        "solutionCode": `
        // In math.js
        export const add = (a, b) => a + b;

        // In main.js
        import { add } from './math.js';
        console.log(add(5, 3)); // Output: 8
        `
    }
],

"JavaScript JSON": [
    {
        "title": "Exercise 1: Parsing JSON",
        "task": "Parse the JSON string '{\"name\":\"Alice\",\"age\":30}' and log the `name` property.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            const jsonString = '{"name":"Alice","age":30}';
            const jsonObject = JSON.parse(jsonString);
            console.log(jsonObject.name); // Output: Alice
        </script>
        `
    },
    {
        "title": "Exercise 2: Stringify an Object",
        "task": "Convert the object `{ name: 'Alice', age: 30 }` into a JSON string and log it.",
        "predefinedCode": `
        <script>
            // Add your JavaScript code here
        </script>
        `,
        "solutionCode": `
        <script>
            const person = { name: "Alice", age: 30 };
            const jsonString = JSON.stringify(person);
            console.log(jsonString); // Output: {"name":"Alice","age":30}
        </script>
        `
    }
],

"JavaScript Debugging": [
    {
        "title": "Exercise 1: Using Console.log",
        "task": "Use `console.log` to debug the following code and fix the error.",
        "predefinedCode": `
        <script>
            let x = 10;
            let y = 5;
            console.log(x + z); // Error: z is not defined
        </script>
        `,
        "solutionCode": `
        <script>
            let x = 10;
            let y = 5;
            console.log(x + y); // Output: 15
        </script>
        `
    },
    {
        "title": "Exercise 2: Debugging with Breakpoints",
        "task": "Explain how to set breakpoints in the browser's developer tools to debug a script.",
        "predefinedCode": `
        // No code for this task. Instructions only.
        `,
        "solutionCode": `
        // Use browser DevTools:
        // 1. Open the browser's developer tools (F12 or right-click > Inspect).
        // 2. Go to the 'Sources' tab.
        // 3. Find the JavaScript file in the file explorer.
        // 4. Click the line number to set a breakpoint.
        // 5. Reload the page and observe code execution.
        `
    }
   ]

};

 let currentModuleIndex = 0;
 let currentExerciseIndex = 0;
 let correctExercises = 0;
 const totalExercises = Object.values(exercises).reduce((total, module) => total + module.length, 0);

 const progress = document.getElementById("progress");
 const moduleLinks = document.getElementById("module-links");
 const exerciseLinks = document.getElementById("exercise-links");
 const editor = ace.edit("editor");

 editor.setTheme("ace/theme/monokai");
 editor.session.setMode("ace/mode/html");

 const exerciseTitle = document.getElementById("exercise-title");
 const exerciseTask = document.getElementById("exercise-task");
 const prevButton = document.getElementById("prev-btn");
 const nextButton = document.getElementById("next-btn");
 const runButton = document.getElementById("run-btn");
 const checkButton = document.getElementById("check-btn");
 const preview = document.getElementById("preview");
 const resultMessage = document.getElementById("result-message");
 const progressText = document.getElementById("progress-text");

 // Load modules and exercises
 function loadModuleLinks() {
     const modules = Object.keys(exercises);
     moduleLinks.innerHTML = modules.map((module, index) => {
         return `<li><a href="#" data-module="${index}">${module.charAt(0).toUpperCase() + module.slice(1)}</a></li>`;
     }).join("");

     document.querySelectorAll("#module-links a").forEach(link => {
         link.addEventListener("click", (e) => {
             currentModuleIndex = parseInt(e.target.getAttribute("data-module"));
             currentExerciseIndex = 0;
             loadExercise(currentModuleIndex, currentExerciseIndex);
         });
     });
 }

 function loadExerciseLinks() {
     const currentModule = Object.keys(exercises)[currentModuleIndex];
     const exercisesInModule = exercises[currentModule];

     exerciseLinks.innerHTML = exercisesInModule.map((exercise, index) => {
         return `<li><a href="#" data-exercise="${index}">${exercise.title}</a></li>`;
     }).join("");

     document.querySelectorAll("#exercise-links a").forEach(link => {
         link.addEventListener("click", (e) => {
             currentExerciseIndex = parseInt(e.target.getAttribute("data-exercise"));
             loadExercise(currentModuleIndex, currentExerciseIndex);
         });
     });
 }

 function loadExercise(moduleIndex, exerciseIndex) {
     const module = Object.keys(exercises)[moduleIndex];
     const exercise = exercises[module][exerciseIndex];

     exerciseTitle.textContent = exercise.title;
     exerciseTask.textContent = exercise.task;
     editor.setValue(exercise.predefinedCode);

     // Preview section should be cleared when loading new exercise
     preview.innerHTML = "";

     // Enable/Disable navigation buttons
     prevButton.disabled = (currentExerciseIndex === 0);
     nextButton.disabled = (currentExerciseIndex === exercises[module].length - 1);

     // Handle the "Check Answer" and "Run Code" button states
     resultMessage.textContent = "";
 }

 function checkAnswer() {
     const module = Object.keys(exercises)[currentModuleIndex];
     const exercise = exercises[module][currentExerciseIndex];
     const userCode = editor.getValue().trim();

     // Check if the user's code matches the solution code
     if (userCode === exercise.solutionCode.trim()) {
         correctExercises++;
         resultMessage.textContent = "Correct!";
         resultMessage.style.color = "green";
     } else {
         resultMessage.textContent = "Incorrect. Try again!";
         resultMessage.style.color = "red";
     }

     updateProgress();
 }

 function updateProgress() {
     const progressPercentage = (correctExercises / totalExercises) * 100;
     progressText.textContent = `${Math.round(progressPercentage)}%`;
 }

 // Event Listeners
 prevButton.addEventListener("click", () => {
     if (currentExerciseIndex > 0) {
         currentExerciseIndex--;
         loadExercise(currentModuleIndex, currentExerciseIndex);
     }
 });

 nextButton.addEventListener("click", () => {
     if (currentExerciseIndex < exercises[Object.keys(exercises)[currentModuleIndex]].length - 1) {
         currentExerciseIndex++;
         loadExercise(currentModuleIndex, currentExerciseIndex);
     }
 });

 runButton.addEventListener("click", () => {
     // Clear previous preview and run the code
     preview.innerHTML = "";
     const userCode = editor.getValue();
     const iframe = document.createElement("iframe");
     preview.appendChild(iframe);
     const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
     iframeDoc.open();
     iframeDoc.write(userCode);
     iframeDoc.close();
 });

 checkButton.addEventListener("click", checkAnswer);

 // Initialize the app
 loadModuleLinks();
 loadExerciseLinks();
 loadExercise(currentModuleIndex, currentExerciseIndex);
});
