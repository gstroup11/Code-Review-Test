//set variables for time and questions
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerid;
var highscorevalue;

//variables calling back to index
var timerEl = document.querySelector(".time");
var startBtn = document.getElementById("Start-Button");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("answer-choices");

//Start button click function
startBtn.addEventListener ("click", function (event) {
    event.preventDefault();
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
        if (time < 1) {
            quizEnd();
        }
        highscorevalue = time;
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
          if (currentQuestionIndex === questions.length) {
            quizEnd(); // Display the end screen if all questions have been answered
          } else {
            getQuestions(); // Display the next question
          } 
        } else {
            time -= 15; // Penalize 15 seconds for a wrong answer
            if (time < 1) {
              quizEnd(); // Display the end screen if time runs out
          }
        }
      });
    
        choicesEl.appendChild(choiceNode);
    }

    if (time <= 0 || currentQuestionIndex === questions.length) {
        quizEnd();
      }
}

function quizEnd() {
    clearInterval(timerid);
    questionsEl.setAttribute("class", "hide");

    var endScreenEl = document.getElementById("End-screen");
    endScreenEl.setAttribute("class", "start");

    displayHighScore();
}

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var initialsInput = document.getElementById("initials");
  var initials = initialsInput.value.trim();
  if (initials !== "") {
    var highScore = {
      initials: initials,
      score: highscorevalue
    };
    saveHighScore(highScore);
    window.location.href = "highscores.html";
  }
});

function saveHighScore(highScore) {
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(highScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function displayHighScore() {
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = highscorevalue;
}
