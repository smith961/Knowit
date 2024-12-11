
const questionsByCategory = {
   general: [
       { question: "How many continents are there in the world?", answers: [{ text: "5", correct: false }, { text: "6", correct: false }, { text: "7", correct: true }, { text: "8", correct: false }] },
       { question: "Which is the smallest country in the world?", answers: [{ text: "Monaco", correct: false }, { text: "Vatican City", correct: true }, { text: "Malta", correct: false }, { text: "Liechtenstein", correct: false }] },
       { question: "What is the capital of France?", answers: [{ text: "Berlin", correct: false }, { text: "Madrid", correct: false }, { text: "Paris", correct: true }, { text: "Lisbon", correct: false }] },
       { question: "What is the tallest mountain in the world?", answers: [{ text: "K2", correct: false }, { text: "Mount Everest", correct: true }, { text: "Kangchenjunga", correct: false }, { text: "Lhotse", correct: false }] },
       { question: "Which ocean is the smallest?", answers: [{ text: "Atlantic", correct: false }, { text: "Indian", correct: false }, { text: "Arctic", correct: true }, { text: "Pacific", correct: false }] },
       { question: "What is the largest mammal in the world?", answers: [{ text: "Elephant", correct: false }, { text: "Blue Whale", correct: true }, { text: "Giraffe", correct: false }, { text: "Great White Shark", correct: false }] },
       { question: "Which planet is known as the Red Planet?", answers: [{ text: "Earth", correct: false }, { text: "Venus", correct: false }, { text: "Mars", correct: true }, { text: "Jupiter", correct: false }] },
       { question: "What is the capital of Japan?", answers: [{ text: "Seoul", correct: false }, { text: "Beijing", correct: false }, { text: "Tokyo", correct: true }, { text: "Bangkok", correct: false }] },
       { question: "Which is the largest desert in the world?", answers: [{ text: "Sahara", correct: false }, { text: "Arabian", correct: false }, { text: "Antarctic", correct: true }, { text: "Gobi", correct: false }] },
       { question: "What is the longest river in the world?", answers: [{ text: "Amazon", correct: true }, { text: "Nile", correct: false }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] }
   ],
   science: [
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
   history: [
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
   geography: [
   { question: "Which country is the largest by area?", answers: [{ text: "United States", correct: false }, { text: "Russia", correct: true }, { text: "China", correct: false }, { text: "Canada", correct: false }] },
   { question: "Which desert is the largest in the world?", answers: [{ text: "Sahara", correct: false }, { text: "Antarctic Desert", correct: true }, { text: "Gobi Desert", correct: false }, { text: "Kalahari Desert", correct: false }] },
   { question: "What is the capital of Australia?", answers: [{ text: "Sydney", correct: false }, { text: "Canberra", correct: true }, { text: "Melbourne", correct: false }, { text: "Brisbane", correct: false }] },
   { question: "Which river is the longest in the world?", answers: [{ text: "Nile", correct: true }, { text: "Amazon", correct: false }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] },
   { question: "Which mountain range separates Europe and Asia?", answers: [{ text: "Himalayas", correct: false }, { text: "Alps", correct: false }, { text: "Ural Mountains", correct: true }, { text: "Rocky Mountains", correct: false }] },
   { question: "What is the capital city of Japan?", answers: [{ text: "Tokyo", correct: true }, { text: "Kyoto", correct: false }, { text: "Osaka", correct: false }, { text: "Hokkaido", correct: false }] },
   { question: "Which continent is known as the 'Dark Continent'?", answers: [{ text: "Asia", correct: false }, { text: "Africa", correct: true }, { text: "South America", correct: false }, { text: "Australia", correct: false }] },
   { question: "What is the smallest country in the world?", answers: [{ text: "Vatican City", correct: true }, { text: "Monaco", correct: false }, { text: "Malta", correct: false }, { text: "Liechtenstein", correct: false }] },
   { question: "Which ocean is the largest?", answers: [{ text: "Atlantic Ocean", correct: false }, { text: "Indian Ocean", correct: false }, { text: "Pacific Ocean", correct: true }, { text: "Arctic Ocean", correct: false }] },
   { question: "Which country has the most natural lakes?", answers: [{ text: "Canada", correct: true }, { text: "Russia", correct: false }, { text: "United States", correct: false }, { text: "Sweden", correct: false }] },
   { question: "What is the capital of Egypt?", answers: [{ text: "Cairo", correct: true }, { text: "Alexandria", correct: false }, { text: "Giza", correct: false }, { text: "Luxor", correct: false }] },
   { question: "Which is the largest island in the world?", answers: [{ text: "Greenland", correct: true }, { text: "New Guinea", correct: false }, { text: "Borneo", correct: false }, { text: "Madagascar", correct: false }] },
   { question: "What is the main language spoken in Brazil?", answers: [{ text: "Spanish", correct: false }, { text: "Portuguese", correct: true }, { text: "English", correct: false }, { text: "French", correct: false }] },
   { question: "Which city is known as the 'Big Apple'?", answers: [{ text: "Los Angeles", correct: false }, { text: "New York City", correct: true }, { text: "Chicago", correct: false }, { text: "San Francisco", correct: false }] },
   { question: "What is the highest waterfall in the world?", answers: [{ text: "Niagara Falls", correct: false }, { text: "Angel Falls", correct: true }, { text: "Victoria Falls", correct: false }, { text: "Yosemite Falls", correct: false }] },
   { question: "Which country is known as the Land of the Rising Sun?", answers: [{ text: "China", correct: false }, { text: "Japan", correct: true }, { text: "South Korea", correct: false }, { text: "Thailand", correct: false }] },
   { question: "Which desert is known as the hottest place on Earth?", answers: [{ text: "Atacama Desert", correct: false }, { text: "Sahara Desert", correct: false }, { text: "Death Valley", correct: true }, { text: "Gobi Desert", correct: false }] }
   ],
  literature: [
   { question: "Who is the author of '1984'?", answers: [{ text: "Aldous Huxley", correct: false }, { text: "George Orwell", correct: true }, { text: "J.R.R. Tolkien", correct: false }, { text: "F. Scott Fitzgerald", correct: false }] },
   { question: "Which novel starts with 'Call me Ishmael'?", answers: [{ text: "Moby-Dick", correct: true }, { text: "The Great Gatsby", correct: false }, { text: "To Kill a Mockingbird", correct: false }, { text: "War and Peace", correct: false }] },
   { question: "Who wrote 'Pride and Prejudice'?", answers: [{ text: "Charlotte Brontë", correct: false }, { text: "Jane Austen", correct: true }, { text: "Emily Brontë", correct: false }, { text: "Mary Shelley", correct: false }] },
   { question: "What is the name of the main character in 'The Catcher in the Rye'?", answers: [{ text: "Holden Caulfield", correct: true }, { text: "Jay Gatsby", correct: false }, { text: "Humbert Humbert", correct: false }, { text: "Atticus Finch", correct: false }] },
   { question: "Which Shakespeare play features the characters of Oberon and Titania?", answers: [{ text: "Hamlet", correct: false }, { text: "A Midsummer Night's Dream", correct: true }, { text: "Macbeth", correct: false }, { text: "Othello", correct: false }] },
   { question: "Who wrote 'The Grapes of Wrath'?", answers: [{ text: "John Steinbeck", correct: true }, { text: "Ernest Hemingway", correct: false }, { text: "F. Scott Fitzgerald", correct: false }, { text: "Mark Twain", correct: false }] },
   { question: "What is the title of the first Harry Potter book?", answers: [{ text: "Harry Potter and the Chamber of Secrets", correct: false }, { text: "Harry Potter and the Philosopher's Stone", correct: true }, { text: "Harry Potter and the Goblet of Fire", correct: false }, { text: "Harry Potter and the Prisoner of Azkaban", correct: false }] },
   { question: "Which author created the character Sherlock Holmes?", answers: [{ text: "Agatha Christie", correct: false }, { text: "Arthur Conan Doyle", correct: true }, { text: "Raymond Chandler", correct: false }, { text: "Dashiell Hammett", correct: false }] },
   { question: "In which novel is the character Jay Gatsby found?", answers: [{ text: "The Great Gatsby", correct: true }, { text: "To Kill a Mockingbird", correct: false }, { text: "The Grapes of Wrath", correct: false }, { text: "Of Mice and Men", correct: false }] },
   { question: "Who wrote the play 'Death of a Salesman'?", answers: [{ text: "Tennessee Williams", correct: false }, { text: "Arthur Miller", correct: true }, { text: "Eugene O'Neill", correct: false }, { text: "David Mamet", correct: false }] },
   { question: "Which novel features the character Elizabeth Bennet?", answers: [{ text: "Pride and Prejudice", correct: true }, { text: "Jane Eyre", correct: false }, { text: "Wuthering Heights", correct: false }, { text: "Sense and Sensibility", correct: false }] },
   ],

   sports: [
   { question: "Which country won the FIFA World Cup in 2018?", answers: [{ text: "Brazil", correct: false }, { text: "Germany", correct: false }, { text: "France", correct: true }, { text: "Argentina", correct: false }] },
   { question: "In tennis, what is the term for a score of 40-40?", answers: [{ text: "Match point", correct: false }, { text: "Deuce", correct: true }, { text: "Love", correct: false }, { text: "Advantage", correct: false }] },
   { question: "Which athlete is known as 'The Greatest' in boxing?", answers: [{ text: "Mike Tyson", correct: false }, { text: "Muhammad Ali", correct: true }, { text: "Floyd Mayweather", correct: false }, { text: "Manny Pacquiao", correct: false }] },
   { question: "What sport is played on a diamond?", answers: [{ text: "Football", correct: false }, { text: "Baseball", correct: true }, { text: "Cricket", correct: false }, { text: "Soccer", correct: false }] },
   { question: "Who holds the record for the most home runs in a single MLB season?", answers: [{ text: "Babe Ruth", correct: false }, { text: "Barry Bonds", correct: true }, { text: "Hank Aaron", correct: false }, { text: "Mark McGwire", correct: false }] },
   { question: "In which sport would you perform a slam dunk?", answers: [{ text: "Basketball", correct: true }, { text: "Volleyball", correct: false }, { text: "Football", correct: false }, { text: "Hockey", correct: false }] },
   { question: "Which country is known for the sport of sumo wrestling?", answers: [{ text: "China", correct: false }, { text: "Japan", correct: true }, { text: "South Korea", correct: false }, { text: "Thailand", correct: false }] },
   { question: "What is the term for scoring three strikes in a row in bowling?", answers: [{ text: "Spare", correct: false }, { text: "Strike", correct: false }, { text: "Turkey", correct: true }, { text: "Split", correct: false }] },
   { question: "Which Olympic sport involves a balance beam?", answers: [{ text: "Gymnastics", correct: true }, { text: "Diving", correct: false }, { text: "Wrestling", correct: false }, { text: "Swimming", correct: false }] },
   { question: "What is the highest score possible in a single game of bowling?", answers: [{ text: "200", correct: false }, { text: "250", correct: false }, { text: "300", correct: true }, { text: "400", correct: false }] },
   { question: "Which sport is known as 'the beautiful game'?", answers: [{ text: "Basketball", correct: false }, { text: "Soccer", correct: true }, { text: "Tennis", correct: false }, { text: "Golf", correct: false }] },
   { question: "What is the maximum number of players allowed on a soccer field for one team?", answers: [{ text: "11", correct: true }, { text: "10", correct: false }, { text: "12", correct: false }, { text: "9", correct: false }] },
   { question: "In which sport do players use a racket and shuttlecock?", answers: [{ text: "Tennis", correct: false }, { text: "Badminton", correct: true }, { text: "Squash", correct: false }, { text: "Table Tennis", correct: false }] },
   { question: "Who has won the most Olympic gold medals in history?", answers: [{ text: "Usain Bolt", correct: false }, { text: "Michael Phelps", correct: true }, { text: "Carl Lewis", correct: false }, { text: "Mark Spitz", correct: false }] },
   { question: "What is the distance of a marathon in miles?", answers: [{ text: "26.2", correct: true }, { text: "24", correct: false }, { text: "25", correct: false }, { text: "30", correct: false }] }
   ],
   popculture: [
   { question: "Which movie won the Oscar for Best Picture in 2020?", answers: [{ text: "1917", correct: false }, { text: "Parasite", correct: true }, { text: "Joker", correct: false }, { text: "Once Upon a Time in Hollywood", correct: false }] },
   { question: "Who is the lead singer of the band Queen?", answers: [{ text: "Freddie Mercury", correct: true }, { text: "Elton John", correct: false }, { text: "Mick Jagger", correct: false }, { text: "Paul McCartney", correct: false }] },
   { question: "What is the highest-grossing film of all time?", answers: [{ text: "Titanic", correct: false }, { text: "Avatar", correct: true }, { text: "Avengers: Endgame", correct: false }, { text: "Star Wars: The Force Awakens", correct: false }] },
   { question: "Which singer is known as the 'Queen of Pop'?", answers: [{ text: "Madonna", correct: true }, { text: "Beyoncé", correct: false }, { text: "Taylor Swift", correct: false }, { text: "Lady Gaga", correct: false }] },
   { question: "Who played Jack Dawson in 'Titanic'?", answers: [{ text: "Brad Pitt", correct: false }, { text: "Leonardo DiCaprio", correct: true }, { text: "Johnny Depp", correct: false }, { text: "Matt Damon", correct: false }] },
   { question: "Which TV show features a character named Sheldon Cooper?", answers: [{ text: "Friends", correct: false }, { text: "The Big Bang Theory", correct: true }, { text: "How I Met Your Mother", correct: false }, { text: "New Girl", correct: false }] },
   { question: "What year did the original 'Jurassic Park' movie release?", answers: [{ text: "1990", correct: false }, { text: "1993", correct: true }, { text: "1995", correct: false }, { text: "1997", correct: false }] },
   { question: "Which artist is famous for the hit song 'Shape of You'?", answers: [{ text: "Ed Sheeran", correct: true }, { text: "Justin Bieber", correct: false }, { text: "Sam Smith", correct: false }, { text: "Shawn Mendes", correct: false }] },
   { question: "What is the name of the fictional African country in 'Black Panther'?", answers: [{ text: "Wakanda", correct: true }, { text: "Zamunda", correct: false }, { text: "Narnia", correct: false }, { text: "Genosha", correct: false }] },
   { question: "Which video game features characters like Mario and Bowser?", answers: [{ text: "Sonic the Hedgehog", correct: false }, { text: "Super Mario", correct: true }, { text: "The Legend of Zelda", correct: false }, { text: "Final Fantasy", correct: false }] },
   { question: "Who directed the film 'Pulp Fiction'?", answers: [{ text: "Martin Scorsese", correct: false }, { text: "Quentin Tarantino", correct: true }, { text: "Steven Spielberg", correct: false }, { text: "David Fincher", correct: false }] },
   { question: "Which pop star is known for the song 'Bad Romance'?", answers: [{ text: "Beyoncé", correct: false }, { text: "Lady Gaga", correct: true }, { text: "Katy Perry", correct: false }, { text: "Rihanna", correct: false }] },
   { question: "What is the name of the coffee shop in 'Friends'?", answers: [{ text: "Java", correct: false }, { text: "Central Perk", correct: true }, { text: "Monk's Cafe", correct: false }, { text: "The Peach Pit", correct: false }] },
   { question: "Which artist painted the 'Mona Lisa'?", answers: [{ text: "Vincent van Gogh", correct: false }, { text: "Pablo Picasso", correct: false }, { text: "Leonardo da Vinci", correct: true }, { text: "Claude Monet", correct: false }] },
   { question: "Who wrote the 'Harry Potter' series?", answers: [{ text: "J.R.R. Tolkien", correct: false }, { text: "J.K. Rowling", correct: true }, { text: "C.S. Lewis", correct: false }, { text: "Suzanne Collins", correct: false }] },
   { question: "Which reality show features contestants competing for a fashion design job?", answers: [{ text: "Survivor", correct: false }, { text: "Project Runway", correct: true }, { text: "The Amazing Race", correct: false }, { text: "The Voice", correct: false }] }
  ],

  technology: [
   { question: "Who is the CEO of Tesla as of 2023?", answers: [{ text: "Jeff Bezos", correct: false }, { text: "Elon Musk", correct: true }, { text: "Mark Zuckerberg", correct: false }, { text: "Tim Cook", correct: false }] },
   { question: "What does 'HTTP' stand for?", answers: [{ text: "HyperText Transfer Protocol", correct: true }, { text: "HyperText Transfer Program", correct: false }, { text: "High Transfer Text Protocol", correct: false }, { text: "HyperText Transfer Project", correct: false }] },
   { question: "What is the main programming language used for web development?", answers: [{ text: "Python", correct: false }, { text: "JavaScript", correct: true }, { text: "C++", correct: false }, { text: "Ruby", correct: false }] },
   { question: "Which company developed the iPhone?", answers: [{ text: "Samsung", correct: false }, { text: "Apple", correct: true }, { text: "Google", correct: false }, { text: "Microsoft", correct: false }] },
   { question: "What is the name of the virtual assistant created by Amazon?", answers: [{ text: "Siri", correct: false }, { text: "Alexa", correct: true }, { text: "Cortana", correct: false }, { text: "Google Assistant", correct: false }] },
   { question: "Which technology is used to make telephone calls over the Internet?", answers: [{ text: "VoIP", correct: true }, { text: "FTP", correct: false }, { text: "VPN", correct: false }, { text: "SMTP", correct: false }] },
   { question: "What does 'AI' stand for?", answers: [{ text: "Artificial Intelligence", correct: true }, { text: "Automatic Interaction", correct: false }, { text: "Augmented Interface", correct: false }, { text: "Advanced Information", correct: false }] },
   { question: "What is the primary purpose of a firewall?", answers: [{ text: "To speed up internet connection", correct: false }, { text: "To block unauthorized access", correct: true }, { text: "To store data", correct: false }, { text: "To enhance graphics", correct: false }] },
   { question: "Which programming language is known as the backbone of web applications?", answers: [{ text: "HTML", correct: false }, { text: "JavaScript", correct: true }, { text: "CSS", correct: false }, { text: "SQL", correct: false }] },
   { question: "What is the name of the software development methodology that emphasizes iterative development?", answers: [{ text: "Waterfall", correct: false }, { text: "Agile", correct: true }, { text: "Scrum", correct: false }, { text: "Lean", correct: false }] },
   { question: "Which company is known for its search engine?", answers: [{ text: "Yahoo", correct: false }, { text: "Google", correct: true }, { text: "Bing", correct: false }, { text: "DuckDuckGo", correct: false }] },
   { question: "What does 'VPN' stand for?", answers: [{ text: "Virtual Private Network", correct: true }, { text: "Virtual Public Network", correct: false }, { text: "Variable Private Network", correct: false }, { text: "Visual Private Network", correct: false }] },
   { question: "What is the name of the first electronic computer?", answers: [{ text: "ENIAC", correct: true }, { text: "Colossus", correct: false }, { text: "UNIVAC", correct: false }, { text: "IBM PC", correct: false }] },
   { question: "Which social media platform is known for its 280-character limit on posts?", answers: [{ text: "Facebook", correct: false }, { text: "Instagram", correct: false }, { text: "Twitter", correct: true }, { text: "Snapchat", correct: false }] },
   { question: "What does 'USB' stand for?", answers: [{ text: "Universal Serial Bus", correct: true }, { text: "Universal Standard Bus", correct: false }, { text: "Unified System Bus", correct: false }, { text: "User System Bus", correct: false }] }
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
