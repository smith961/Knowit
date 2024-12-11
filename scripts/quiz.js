
const questionsByCategory = {
   html: [
       { question: " What does HTML stand for?", answers: [{ text: "Home Tool Markup Language", correct: false }, { text: " Hyperlinks and Text Markup Language", correct: false }, { text: "Hyper Text Markup Language", correct: true }, { text: " Hyperlinking Textual Mode Language", correct: false }] },
       { question: "Which software is commonly used to write HTML code?", answers: [{ text: "Microsoft Word", correct: false }, { text: "Notepad", correct: true }, { text: "Adobe Photoshop", correct: false }, { text: "VLC Media Player", correct: false }] },
       { question: " What is the correct HTML element for inserting a line break?", answers: [{ text: "<>", correct: false }, { text: " <break>", correct: false }, { text: "<br>", correct: true }, { text: "<newline>", correct: false }] },
       { question: " Which HTML element represents the largest heading?", answers: [{ text: "<h6>", correct: false }, { text: "<h1>", correct: true }, { text: "<heading>", correct: false }, { text: "<h>", correct: false }] },
       { question: " What is the correct syntax for adding an attribute in HTML?", answers: [{ text: `<tag attribute"value">`, correct: false }, { text: ` <tag:attribute=value>`, correct: false }, { text: `<attribute tag="value">`, correct: true }, { text: `<tag(attribute)value>`, correct: false }] },
       { question: "What is the largest mammal in the world?", answers: [{ text: "Elephant", correct: false }, { text: "Blue Whale", correct: true }, { text: "Giraffe", correct: false }, { text: "Great White Shark", correct: false }] },
       { question: "Which planet is known as the Red Planet?", answers: [{ text: "Earth", correct: false }, { text: "Venus", correct: false }, { text: "Mars", correct: true }, { text: "Jupiter", correct: false }] },
       { question: "What is the capital of Japan?", answers: [{ text: "Seoul", correct: false }, { text: "Beijing", correct: false }, { text: "Tokyo", correct: true }, { text: "Bangkok", correct: false }] },
       { question: "Which is the largest desert in the world?", answers: [{ text: "Sahara", correct: false }, { text: "Arabian", correct: false }, { text: "Antarctic", correct: true }, { text: "Gobi", correct: false }] },
       { question: "What is the longest river in the world?", answers: [{ text: "Amazon", correct: true }, { text: "Nile", correct: false }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] }
   ],
   
   

  

   

   


   
//    <p>5. What is the correct syntax for adding an attribute in HTML?</p>
//    <label><input type="radio" name="q5"> </label><br>
//    <label><input type="radio" name="q5"></label><br>
//    <label><input type="radio" name="q5"></label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q5"> </label><br>
//    <p><strong>Answer: &lt;tag attribute="value"&gt;</strong></p>

  
//    <p>6. How do you make text bold in HTML?</p>
//    <label><input type="radio" name="q6"> &lt;strong&gt;</label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q6"> &lt;italic&gt;</label><br>
//    <label><input type="radio" name="q6"> &lt;em&gt;</label><br>
//    <label><input type="radio" name="q6"> &lt;mark&gt;</label><br>
//    <p><strong>Answer: &lt;strong&gt;</strong></p>

   
//    <p>7. Which tag is used to insert a paragraph in HTML?</p>
//    <label><input type="radio" name="q7"> &lt;p&gt;</label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q7"> &lt;para&gt;</label><br>
//    <label><input type="radio" name="q7"> &lt;paragraph&gt;</label><br>
//    <label><input type="radio" name="q7"> &lt;text&gt;</label><br>
//    <p><strong>Answer: &lt;p&gt;</strong></p>

   
//    <p>8. How can you create an unordered list in HTML?</p>
//    <label><input type="radio" name="q8"> &lt;ul&gt;</label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q8"> &lt;list&gt;</label><br>
//    <label><input type="radio" name="q8"> &lt;ol&gt;</label><br>
//    <label><input type="radio" name="q8"> &lt;unlist&gt;</label><br>
//    <p><strong>Answer: &lt;ul&gt;</strong></p>

   
//    <p>9. Which HTML element is used to define important text?</p>
//    <label><input type="radio" name="q9"> &lt;mark&gt;</label><br>
//    <label><input type="radio" name="q9"> &lt;em&gt;</label><br>
//    <label><input type="radio" name="q9"> &lt;strong&gt;</label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q9"> &lt;b&gt;</label><br>
//    <p><strong>Answer: &lt;strong&gt;</strong></p>

   
//    <p>10. What is the correct syntax for inserting a comment in HTML?</p>
//    <label><input type="radio" name="q10"> &lt;!-- Comment --&gt;</label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q10"> // Comment</label><br>
//    <label><input type="radio" name="q10"> /* Comment */</label><br>
//    <label><input type="radio" name="q10"> # Comment</label><br>
//    <p><strong>Answer: &lt;!-- Comment --&gt;</strong></p>

   
//    <p>11. How do you create a hyperlink in HTML?</p>
//    <label><input type="radio" name="q11"> &lt;a href="url"&gt;Link&lt;/a&gt;</label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q11"> &lt;link src="url"&gt;Link&lt;/link&gt;</label><br>
//    <label><input type="radio" name="q11"> &lt;href="url"&gt;Link&lt;/href&gt;</label><br>
//    <label><input type="radio" name="q11"> &lt;url&gt;Link&lt;/url&gt;</label><br>
//    <p><strong>Answer: &lt;a href="url"&gt;Link&lt;/a&gt;</strong></p>

  
//    <p>12. How do you add a favicon to an HTML document?</p>
//    <label><input type="radio" name="q12"> &lt;link rel="icon" href="favicon.ico"&gt;</label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q12"> &lt;icon href="favicon.ico"&gt;</label><br>
//    <label><input type="radio" name="q12"> &lt;img rel="icon" href="favicon.ico"&gt;</label><br>
//    <label><input type="radio" name="q12"> &lt;favicon rel="icon" href="favicon.ico"&gt;</label><br>
//    <p><strong>Answer: &lt;link rel="icon" href="favicon.ico"&gt;</strong></p>

   
//    <p>13. Which tag is used to define a table header?</p>
//    <label><input type="radio" name="q13"> &lt;th&gt;</label><br><!-- Correct Answer -->
//    <label><input type="radio" name="q13"> &lt;td&gt;</label><br>
//    <label><input type="radio" name="q13"> &lt;thead&gt;</label><br>
//    <label><input type="radio" name="q13"> &lt;header&gt;</label><br>
//    <p><strong>Answer: &lt;th&gt;</strong></p>

//    <p>14. What is the correct way to define an <code>id</code> in HTML?</p>
// <label><input type="radio" name="q1"> &lt;div id='example'&gt;</label><br><!-- Correct Answer -->
// <label><input type="radio" name="q1"> &lt;div idname='example'&gt;</label><br>
// <label><input type="radio" name="q1"> &lt;div class='example'&gt;</label><br>
// <label><input type="radio" name="q1"> &lt;div name='example'&gt;</label><br>
// <p><strong>Answer: &lt;div id='example'&gt;</strong></p>


// <p>15. Which HTML element is commonly used to define the main navigation links?</p>
// <label><input type="radio" name="q2"> &lt;footer&gt;</label><br>
// <label><input type="radio" name="q2"> &lt;section&gt;</label><br>
// <label><input type="radio" name="q2"> &lt;nav&gt;</label><br><!-- Correct Answer -->
// <label><input type="radio" name="q2"> &lt;article&gt;</label><br>
// <p><strong>Answer: &lt;nav&gt;</strong></p>


// <p>16. Which meta tag is essential for responsive web design?</p>
// <label><input type="radio" name="q3"> &lt;meta name="responsive" content="yes"&gt;</label><br>
// <label><input type="radio" name="q3"> &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</label><br><!-- Correct Answer -->
// <label><input type="radio" name="q3"> &lt;meta name="mobile" content="responsive"&gt;</label><br>
// <label><input type="radio" name="q3"> &lt;meta name="scale" content="adjustable"&gt;</label><br>
// <p><strong>Answer: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</strong></p>


// <p>17. Which HTML tag is used to define emphasized text with semantic meaning?</p>
// <label><input type="radio" name="q4"> &lt;i&gt;</label><br>
// <label><input type="radio" name="q4"> &lt;em&gt;</label><br><!-- Correct Answer -->
// <label><input type="radio" name="q4"> &lt;strong&gt;</label><br>
// <label><input type="radio" name="q4"> &lt;span&gt;</label><br>
// <p><strong>Answer: &lt;em&gt;</strong></p>


// <p>18. Which attribute is used to specify where to send the form data when submitted?</p>
// <label><input type="radio" name="q5"> href</label><br>
// <label><input type="radio" name="q5"> action</label><br><!-- Correct Answer -->
// <label><input type="radio" name="q5"> method</label><br>
// <label><input type="radio" name="q5"> target</label><br>
// <p><strong>Answer: action</strong></p>


// <p>19. What is the correct way to create a single-line text input field in a form?</p>
// <label><input type="radio" name="q6"> &lt;input type="text"&gt;</label><br><!-- Correct Answer -->
// <label><input type="radio" name="q6"> &lt;input type="input"&gt;</label><br>
// <label><input type="radio" name="q6"> &lt;textarea&gt;</label><br>
// <label><input type="radio" name="q6"> &lt;input type="textfield"&gt;</label><br>
// <p><strong>Answer: &lt;input type="text"&gt;</strong></p>


// <p>20. How do you define a submit button in an HTML form?</p>
// <label><input type="radio" name="q7"> &lt;button type="submit"&gt;Submit&lt;/button&gt;</label><br><!-- Correct Answer -->
// <label><input type="radio" name="q7"> &lt;input type="button" value="Submit"&gt;</label><br>
// <label><input type="radio" name="q7"> &lt;submit&gt;Submit&lt;/submit&gt;</label><br>
// <label><input type="radio" name="q7"> &lt;form type="submit"&gt;</label><br>
// <p><strong>Answer: &lt;button type="submit"&gt;Submit&lt;/button&gt;</strong></p>

// </form>
   css: [
       { question: "What is the chemical symbol for gold?", answers: [{ text: "Au", correct: true }, { text: "Ag", correct: false }, { text: "Pb", correct: false }, { text: "Fe", correct: false }] },
       { question: "What is the powerhouse of the cell?", answers: [{ text: "Nucleus", correct: false }, { text: "Mitochondria", correct: true }, { text: "Ribosome", correct: false }, { text: "Endoplasmic Reticulum", correct: false }] },
       { question: "What is the speed of light?", answers: [{ text: "300,000 km/s", correct: true }, { text: "150,000 km/s", correct: false }, { text: "400,000 km/s", correct: false }, { text: "200,000 km/s", correct: false }] },
       { question: "What is the main gas found in the air we breathe?", answers: [{ text: "Oxygen", correct: false }, { text: "Nitrogen", correct: true }, { text: "Carbon Dioxide", correct: false }, { text: "Hydrogen", correct: false }] },
       { question: "What part of the brain is responsible for coordination?", answers: [{ text: "Cerebrum", correct: false }, { text: "Cerebellum", correct: true }, { text: "Brainstem", correct: false }, { text: "Thalamus", correct: false }] },
       { question: "What is H2O more commonly known as?", answers: [{ text: "Hydrogen Peroxide", correct: false }, { text: "Water", correct: true }, { text: "Ozone", correct: false }, { text: "Sodium Chloride", correct: false }] },
       { question: "What force keeps us on the ground?", answers: [{ text: "Friction", correct: false }, { text: "Gravity", correct: true }, { text: "Magnetism", correct: false }, { text: "Inertia", correct: false }] },
       { question: "What is the largest organ in the human body?", answers: [{ text: "Heart", correct: false }, { text: "Skin", correct: true }, { text: "Liver", correct: false }, { text: "Lungs", correct: false }] },
       { question: "What is the process by which plants make their food?", answers: [{ text: "Photosynthesis", correct: true }, { text: "Respiration", correct: false }, { text: "Transpiration", correct: false }, { text: "Fermentation", correct: false }] },
       { question: "What type of animal is a frog?", answers: [{ text: "Mammal", correct: false }, { text: "Reptile", correct: false }, { text: "Amphibian", correct: true }, { text: "Fish", correct: false }] }
   ],
   javascript: [
       { question: "Who was the first President of the United States?", answers: [{ text: "Thomas Jefferson", correct: false }, { text: "George Washington", correct: true }, { text: "Abraham Lincoln", correct: false }, { text: "John Adams", correct: false }] },
       { question: "What year did World War II end?", answers: [{ text: "1941", correct: false }, { text: "1945", correct: true }, { text: "1939", correct: false }, { text: "1950", correct: false }] },
       { question: "Who was known as the Iron Lady?", answers: [{ text: "Margaret Thatcher", correct: true }, { text: "Golda Meir", correct: false }, { text: "Angela Merkel", correct: false }, { text: "Indira Gandhi", correct: false }] },
       { question: "What was the first civilization?", answers: [{ text: "Sumer", correct: true }, { text: "Egypt", correct: false }, { text: "Indus Valley", correct: false }, { text: "Mesopotamia", correct: false }] },
       { question: "Who discovered America?", answers: [{ text: "Christopher Columbus", correct: true }, { text: "Leif Erikson", correct: false }, { text: "Ferdinand Magellan", correct: false }, { text: "Amerigo Vespucci", correct: false }] },
       { question: "What ancient wonder was located in the city of Babylon?", answers: [{ text: "Hanging Gardens", correct: true }, { text: "Great Pyramid", correct: false }, { text: "Colossus of Rhodes", correct: false }, { text: "Statue of Zeus", correct: false }] },
       { question: "Which country gifted the Statue of Liberty to the United States?", answers: [{ text: "France", correct: true }, { text: "Germany", correct: false }, { text: "Italy", correct: false }, { text: "Spain", correct: false }] },
       { question: "What was the main cause of the Cold War?", answers: [{ text: "Disagreement over capitalism vs communism", correct: true }, { text: "The Vietnam War", correct: false }, { text: "Nuclear proliferation", correct: false }, { text: "Decolonization", correct: false }] },
       { question: "In which year did the Berlin Wall fall?", answers: [{ text: "1989", correct: true }, { text: "1991", correct: false }, { text: "1987", correct: false }, { text: "1990", correct: false }] },
       { question: "Who was the first female Prime Minister of the UK?", answers: [{ text: "Margaret Thatcher", correct: true }, { text: "Theresa May", correct: false }, { text: "Angela Merkel", correct: false }, { text: "Indira Gandhi", correct: false }] }
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
       score += 200; // Add 200 points for a correct answer
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
           // Redirect to disqualified page with the score
           window.location.href = 'disqualification.php';
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
   if (score === questions.length * 200) { // Assuming each question is worth 200 points
       // Redirect to the congratulations page with the score
       window.location.href = `congratulations.php?score=${score}`;
   } else {
       // Show the restart button if not all answers are correct
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
