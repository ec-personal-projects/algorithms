function tournamentWinner(competitions, results) {
  // Define a storage object which contains the points each team has accumulated:
  let scores = {};
  // Define a current high score:
  let highScore = 0;
  // Define a current winner:
  let winner = "";
  // Iterate through the competitions and results at the same time:
  for (let i = 0; i < competitions.length; i++) {
    //If results = 0 then the away team (index of 1) gains 3 points:
    if (results[i] === 0) {
      if (!scores[competitions[i][1]]) {
        scores[competitions[i][1]] = 3;
      } else {
        scores[competitions[i][1]] += 3;
      }
      //If the team's score is now higher than the current high score, replace the current high score and the winner
      if (scores[competitions[i][1]] >= highScore) {
        highScore = scores[competitions[i][1]];
        winner = competitions[i][1];
      }
    } else {
      //If results = 1 then the home team (index of 0) gains 3 points:
      if (!scores[competitions[i][0]]) {
        scores[competitions[i][0]] = 3;
      } else {
        scores[competitions[i][0]] += 3;
      }
      if (scores[competitions[i][0]] >= highScore) {
        //If the team's score is now higher than the current high score, replace the current high score and the winner
        highScore = scores[competitions[i][0]];
        winner = competitions[i][0];
      }
    }
  }

  //Return winner:
  return winner;
}

tournamentWinner(
  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ],
  [0, 0, 1]
);
