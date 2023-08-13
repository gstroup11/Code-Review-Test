//displays the highscores in an ordered list on the page.
function displayHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var highScoresList = document.getElementById("highscores");

    //sorts from highest to lowest
    highScores.sort(function(a, b) {
        return b.score - a.score;
      });
  
    //creates the list
    for (var i = 0; i < highScores.length; i++) {
      var scoreItem = document.createElement("li");
      scoreItem.textContent = highScores[i].initials + " - " + highScores[i].score;
      highScoresList.appendChild(scoreItem);
    }
  }
  
  //clears the highscores that existed before
  function clearHighScores() {
    localStorage.removeItem("highScores");
    var highScoresList = document.getElementById("highscores");
    highScoresList.innerHTML = "";
  }
  
  // Call displayHighScores() initially to display any existing high scores
  displayHighScores();
  
  // Add event listener to the clear high scores button
  var clearButton = document.getElementById("clear-highscores");
  clearButton.addEventListener("click", function() {
    clearHighScores();
  });