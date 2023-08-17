# Code-Review-Test

## Description

This test is a review tool for coding bootcamp 2023!  You can go at your own pace and try to beat your last highscore!

## Usage 

This application is solely based around review, so use at your own pace.  Starting off with the main page you can see a big "Start Test" button, this starts the test and the timer will start.  With each question that pops up you will have four choices.  If you select the correct answer you will go to the next question; if you choose the wrong answer the timer will go down by 15 seconds.  Your score will be what time is remaining when you finish the test.  You can then type your initials in the submit box and submit your score.  This will take you to the "Highscores" page which you can also access from the main page, where it says "Highscores". 

Link to the deployed application: https://gstroup11.github.io/Code-Review-Test/

![Main Page's Start Button](https://raw.githubusercontent.com/gstroup11/Code-Review-Test/main/assets/images/mainsubmit.png)
![Questions Page](https://raw.githubusercontent.com/gstroup11/Code-Review-Test/main/assets/images/questions.png)
![Submit Button Location on End Screen](https://raw.githubusercontent.com/gstroup11/Code-Review-Test/main/assets/images/submitbutton.png)
![Highscores Page](https://raw.githubusercontent.com/gstroup11/Code-Review-Test/main/assets/images/highscores.png)
![Highscores Page href link](https://raw.githubusercontent.com/gstroup11/Code-Review-Test/main/assets/images/howtoaccesshighscores.png)

## Credits 

INDEX.HTML```

Line 32 through 35 in html based on bootcampspots reference;

JAVASCRIPT```

questions.js is from Bootcampspot;

Based off the work of Xpert Learning Assistant:

    // get questions function
    function questions() {
     var currentQuestion = questions[currentQuestionIndex];

     // Update the HTML to display the current question
    questionsEl.textContent = currentQuestion;

    // Add code to handle user input and check if the answer is correct
    };

Based off BootcampSpot Reference:

    function getQuestions() {
    var currentQuestion = questions[currentQuestionIndex];

    var questionTitle = document.getElementById("full-question");
    questionTitle.textContent = currentQuestion.title; 

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);
    
        choiceNode.textContent = i + 1 + '. ' + choice;
    
        choicesEl.appendChild(choiceNode);
    }
    }


Based off Xpert Learning Assistant:

    // Add event listener to each choice
    choiceNode.addEventListener('click', function(event) {
      var selectedChoice = event.target.value;
      if (selectedChoice === currentQuestion.answer) {
        currentQuestionIndex++; // Increment the current question index
        getQuestions(); // Display the next question
      }
    });


Based Off Xpert Learning Assistant:

    if (currentQuestionIndex === questions.length) {
          quizEnd(); // Display the end screen if all questions have been answered
        } else {
          getQuestions(); // Display the next question
        }

lines 92-116 based on the work of Xpert Learning Assistant;

scores.js based off of Xpert Learning Assistant answers;

based off Xpert Learning Assistant:

     highScores.sort(function(a, b) {
        return b.score - a.score;
    });

STYLE.CSS```

Based off of the work of https://www.w3docs.com/snippets/css/how-to-style-buttons-with-css.html:

    display: inline-block;
    background-color: #8400d3;
    padding: 20px;
    width: 200px;
    color: #ffffff;
    text-align: center;
    border: 4px double #cccccc;
    border-radius: 10px;
    font-size: 28px;
    cursor: pointer;
    margin: 5px;
    -webkit-transition: all 0.5s; /* add this line, chrome, safari, etc */
    -moz-transition: all 0.5s; /* add this line, firefox */
    -o-transition: all 0.5s; /* add this line, opera */
    transition: all 0.5s; /* add this line */


Based off the work of Bootcampspot:

    #answer-choices button {
        display: inline-block;
        margin: 5px;
        cursor: pointer;
        font-size: 130%;
        background-color: #563d7c;
        border-radius: 5px;
        padding: 2px 10px;
        color: white;
        border: 0;
        transition: background-color 0.1s;
    }

lines 138-164 based on bootcampspot's reference;

## License 

Refer to the license in the repo.