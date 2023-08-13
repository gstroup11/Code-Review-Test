function displayHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var highScoresList = document.getElementById("highscores");
  
    for (var i = 0; i < highScores.length; i++) {
      var scoreItem = document.createElement("li");
      scoreItem.textContent = highScores[i].initials + " - " + highScores[i].score;
      highScoresList.appendChild(scoreItem);
    }
  }
  
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