
const questionsByCategory = {
   html: [
       { question: " What does HTML stand for?", answers: [{ text: "Home Tool Markup Language", correct: false }, { text: " Hyperlinks and Text Markup Language", correct: false }, { text: "Hyper Text Markup Language", correct: true }, { text: " Hyperlinking Textual Mode Language", correct: false }] },
       { question: "Which software is commonly used to write HTML code?", answers: [{ text: "Microsoft Word", correct: false }, { text: "Notepad", correct: true }, { text: "Adobe Photoshop", correct: false }, { text: "VLC Media Player", correct: false }] },
       { question: " What is the correct HTML element for inserting a line break?", answers: [{ text: "<>", correct: false }, { text: " <break>", correct: false }, { text: "<br>", correct: true }, { text: "<newline>", correct: false }] },
       { question: " Which HTML element represents the largest heading?", answers: [{ text: "<h6>", correct: false }, { text: "<h1>", correct: true }, { text: "<heading>", correct: false }, { text: "<h>", correct: false }] },
       { question: " What is the correct syntax for adding an attribute in HTML?", answers: [{ text: `<tag attribute"value">`, correct: false }, { text: ` <tag:attribute=value>`, correct: false }, { text: `<attribute tag="value">`, correct: true }, { text: `<tag(attribute)value>`, correct: false }] },
       { question: "How do you make text bold in HTML?", answers: [{ text: "<italic>", correct: false }, { text: "<strong>", correct: true }, { text: "<em>", correct: false }, { text: "<mark>", correct: false }] },
       { question: "Which tag is used to insert a paragraph in HTML?", answers: [{ text: "<para>", correct: false }, { text: "<paragraph>", correct: false }, { text: "<p>", correct: true }, { text: "<text>", correct: false }] },
       { question: "How can you create an unordered list in HTML?", answers: [{ text: "<list>", correct: false }, { text: "<ol>", correct: false }, { text: "<ul>", correct: true }, { text: "<unlist>", correct: false }] },
       { question: " Which HTML element is used to define important text?", answers: [{ text: "<mark>", correct: false }, { text: "<em>", correct: false }, { text: "<strong>", correct: true }, { text: "<b>", correct: false }] },
       { question: "What is the correct syntax for inserting a comment in HTML?", answers: [{ text: "<Comment>", correct: true }, { text: " // Comment", correct: false }, { text: "/* Comment */", correct: false }, { text: " # Comment", correct: false }] }
    ],
    css: [
        { question: "What does CSS stand for?", answers: [{ text: " Cascading Style Sheets", correct: true }, { text: " Creative Style Sheets", correct: false }, { text: " Computer Style Sheets", correct: false }, { text: " Cascading Simple Sheets", correct: false }] },
        { question: "What is the correct CSS syntax to change the background color of a page to blue?", answers: [{ text: "background: blue;", correct: false }, { text: " background-color: blue;", correct: true }, { text: " color: blue;", correct: false }, { text: " bgcolor: blue;", correct: false }] },
        { question: "How do you define a color using RGB in CSS?", answers: [{ text: "rgb(255, 0, 0)", correct: true }, { text: "rgb(0, 0, 255)", correct: false }, { text: " rgba(255, 0, 0, 0.5)", correct: false }, { text: " red(255, 0, 0)", correct: false }] },
        { question: " How do you add a solid black border with a width of 2px to an element?", answers: [{ text: "border-color: black;", correct: false }, { text: "border: 2px solid black;", correct: true }, { text: " border-width: 2px;", correct: false }, { text: " border-style: solid;", correct: false }] },
        { question: " What is the property used to create space outside an element?", answers: [{ text: " padding", correct: false }, { text: "margin", correct: true }, { text: "border", correct: false }, { text: "space", correct: false }] },
        { question: "Which property is used to create space inside an element?", answers: [{ text: "margin", correct: false }, { text: "padding", correct: true }, { text: "content", correct: false }, { text: " space", correct: false }] },
        { question: " How do you set the width of an element to 100px?", answers: [{ text: " size: 100px;", correct: false }, { text: "width: 100px;", correct: true }, { text: "width: 100%;", correct: false }, { text: "height: 100px;", correct: false }] },
        { question: "Which property is part of the CSS box model and defines the space inside an element's border?", answers: [{ text: " margin", correct: false }, { text: "padding", correct: true }, { text: "border", correct: false }, { text: "width", correct: false }] },
        { question: "How do you apply styles based on the screen size in CSS?", answers: [{ text: " @media screen and (max-width: 600px) { }", correct: true }, { text: "@screen and (max-width: 600px) { }", correct: false }, { text: " @media (max-width: 600px) { }", correct: false }, { text: " @media query (max-width: 600px) { }", correct: false }] },
        { question: "How do you change the color of a link when hovered?", answers: [{ text: "a.link:hover { color: red; }", correct: false }, { text: "a:hover { text-color: red; }", correct: false }, { text: " a:hover { color: red; }", correct: true }, { text: "link:hover { color: red; }", correct: false }] }
    ],
    javascript: [
        { question: "What does JavaScript do?", answers: [{ text: " It is used for creating database queries.", correct: false }, { text: "It is used for creating web pages.", correct: true }, { text: "It is used for creating server-side applications.", correct: false }, { text: " It is used for styling web pages.", correct: false }] },
        { question: " How do you display a message in the browser's console?", answers: [{ text: `print("Hello World")`, correct: false }, { text: `console.log("Hello World")`, correct: true }, { text: `alert("Hello World")`, correct: false }, { text: ` echo("Hello World")`, correct: false }] },
        { question: "What is a JavaScript statement?", answers: [{ text: " A statement performs an action.", correct: true }, { text: " A statement is a block of code that repeats.", correct: false }, { text: "A statement is a function that can be called.", correct: false }, { text: "A statement is used to define variables.", correct: false }] },
        { question: "What is the correct syntax to create a function in JavaScript?", answers: [{ text: " function myFunction() { }", correct: true }, { text: "createFunction myFunction() { }", correct: false }, { text: "function: myFunction() { }", correct: false }, { text: " def myFunction() { }", correct: false }] },
        { question: "How do you write a single-line comment in JavaScript?", answers: [{ text: "// This is a comment", correct: true }, { text: "<!-- This is a comment -->", correct: false }, { text: "/* This is a comment */", correct: false }, { text: "# This is a comment ", correct: false }] },
        { question: " How do you declare a variable in JavaScript?", answers: [{ text: "var x;", correct: true }, { text: "variable x;", correct: false }, { text: "let x;", correct: false }, { text: "const x;", correct: false }] },
        { question: " What does the '==' operator do in JavaScript?", answers: [{ text: "Compares two values for equality.", correct: true }, { text: " Compares two variables.", correct: false }, { text: "It Adds two values.", correct: false }, { text: "Assigns a value to a variable.", correct: false }] },
        { question: ` What will the expression 5 + 10 + "10" evaluate to in JavaScript?`, answers: [{ text: "1510", correct: true }, { text: " 25", correct: false }, { text: "10", correct: false }, { text: "15", correct: false }] },
        { question: " What is the data type of the following value: 42?", answers: [{ text: "Number", correct: true }, { text: " String", correct: false }, { text: " Boolean", correct: false }, { text: "BigInt", correct: false }] },
        { question: `How do you call a function named "myFunction" in JavaScript?`, answers: [{ text: "myFunction();", correct: true }, { text: " call myFunction();", correct: false }, { text: "function myFunction();", correct: false }, { text: "invoke myFunction();", correct: false }] }
    ],

   
 };
 
 const categoryButtons = document.querySelectorAll('.category-btn');
 
 categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category; // Get category from data attribute
        questions = questionsByCategory[selectedCategory]; // Update questions based on selected category
        hideCategoryButtons(); // Hide all category buttons
        startQuiz(); // Start the quiz for the selected category
    });
 });
 
 function hideCategoryButtons() {
    const categoryContainer = document.getElementById('category-buttons');
    categoryContainer.style.display = 'none'; // Hide category buttons
    const categoryLabel = document.getElementById('select-category-label');
    categoryLabel.style.display = 'none'; // Hide the select category lab
 }
 
 // Declare global variables for quiz
 const questionContainer = document.getElementById('question-container');
 const answerButtons = document.getElementById('answer-buttons');
 const nextButton = document.getElementById('next-button');
 const attemptsMessage = document.getElementById('attempts-message');
 const feedbackMessage = document.getElementById('feedback-message');
 const resultContainer = document.getElementById('result-container');
 const scoreDisplay = document.getElementById('score');
 const restartButton = document.getElementById('restart-button');
 const timerDisplay = document.getElementById('time');
 
 let currentQuestionIndex = 0;
 let score = 0;
 let wrongAttempts = 0; // Tracks wrong attempts across all questions
 const maxAttempts = 3; // Maximum wrong attempts allowed for the entire quiz
 let timer;
 let timeRemaining = 120; // 120 seconds for the quiz
 let questions = []; // Store the questions for the selected category
 
 function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    resultContainer.style.display = 'none';
    feedbackMessage.style.display = 'none';
    attemptsMessage.style.display = 'none';
    wrongAttempts = 0; // Reset wrong attempts when the quiz starts
    setNextQuestion();
    
    startTimer();
 }
 
 function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
 }
 
 function showQuestion(question) {
    questionContainer.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
 }
 
 function resetState() {
    nextButton.style.display = 'none';
    attemptsMessage.style.display = 'none';
    feedbackMessage.style.display = 'none';
    restartButton.style.display = 'none';
   
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }
 
 function selectAnswer(answer) {
    const correct = answer.correct;
 
    if (correct) {
        score += 10; // Add 10 points for a correct answer
        sessionStorage.setItem('score', score); // Store score in session storage
        feedbackMessage.innerText = 'Correct!';
        feedbackMessage.style.color = 'green';
        feedbackMessage.style.display = 'block';
        nextButton.style.display = 'block';
    } else {
        wrongAttempts++; // Increment wrong attempts on an incorrect answer
        feedbackMessage.innerText = 'Wrong!';
        feedbackMessage.style.color = 'red';
        feedbackMessage.style.display = 'block';
        attemptsMessage.innerText = `Wrong Attempts: ${wrongAttempts} / ${maxAttempts}`;
        attemptsMessage.style.display = 'block';
 
        if (wrongAttempts >= maxAttempts) {
            // Store the current score in session storage before redirecting
            sessionStorage.setItem('score', score); // Store score in session storage
            clearInterval(timer);
            questionContainer.innerHTML = '<strong>Disqualified!!!<strong> Try again!!!';
            scoreDisplay.innerHTML = `${score}`;
            restartButton.style.display = 'block';
            // Redirect to disqualified page with the score
            // window.location.href = 'disqualification.php';
        }
    }
 }
 
 nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        endQuiz();
    }
 });
 
 function endQuiz() {
    clearInterval(timer); // Stop the timer
    resetState();
   
    resultContainer.style.display = 'block'; // Show the result container
 
    // Check if the score indicates all answers were correct
    if (score === questions.length * 10) { // Assuming each question is worth 10 points
        // Redirect to the congratulations page with the score
        questionContainer.innerHTML = '<strong>Congratulations!!!<strong> your certificate awaits you!!!';
        scoreDisplay.innerHTML = `${score}`;
        // window.location.href = `congratulations.php?score=${score}`;
    } else {
        // Show the restart button if not all answers are correct
        questionContainer.innerHTML = 'For you to be certified you need to anwser all questions correctly!!!';
        scoreDisplay.innerHTML = `${score}`;
        restartButton.style.display = 'block';
    }
 }
 
 function startTimer() {
    timeRemaining = 120; // Reset timer to 120 seconds
    timerDisplay.innerText = timeRemaining;
    timer = setInterval(() => {
        timeRemaining--;
        timerDisplay.innerText = timeRemaining;
 
        if (timeRemaining <= 0) {
            clearInterval(timer);
            endQuiz(); // End quiz when timer reaches 0
        }
    }, 1000);
 }
 
 restartButton.addEventListener('click', () => {
    startQuiz(); // Restart the quiz
 });
   
    
   


    


    

    


    

   


    


    


    


    
    


 

   

  

   

   


   

  


   

   


   
   
