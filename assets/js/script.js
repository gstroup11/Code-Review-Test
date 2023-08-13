//set variables for time and questions
var currentQuestionIndex = [0];
var time = questions.length * 15;
var timerid;

//variables calling back to index
var timerEl = document.querySelector(".time");
var startBtn = document.getElementById("Start-Button");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("answer-choices");

//Start button click function
startBtn.addEventListener ("click", function (event) {
    event.preventDefault;
    quizStart();
})

//start button functionality
function quizStart() {
    var mainScreenEl = document.getElementById("Main-screen");
    mainScreenEl.setAttribute ("class", "hide"); 
    questionsEl.setAttribute("class", "start");

    timerid = setInterval( function() {
        time --;
        timerEl.textContent = time;
    }, 1000);

    timerEl.textContent = time;

    getQuestions();
}

//get questions function
function getQuestions() {
    var currentQuestion = questions[currentQuestionIndex];

    var questionTitle = document.getElementById("full-question");
    questionTitle.textContent = currentQuestion.title; 

    choicesEl.innerHTML = ""; 

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);
    
        choiceNode.textContent = i + 1 + '. ' + choice;

            // Add event listener to each choice
    choiceNode.addEventListener('click', function(event) {
        var selectedChoice = event.target.value;
        if (selectedChoice === currentQuestion.answer) {
          currentQuestionIndex++; // Increment the current question index
          getQuestions(); // Display the next question
        }
      });
    
        choicesEl.appendChild(choiceNode);
    }
}

