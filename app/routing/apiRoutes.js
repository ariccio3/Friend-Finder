
var friendsArray = require("../data/friends.js");
// var friendScores = friendsArray[i].scores[j];

// console.log(friendScores);
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });


  app.post("/api/friends", function(req, res) {
      var newSurvey = req.body.scores;    
      var differance = 0;

      for (var i = 0; i < newSurvey.length; i++) {

        for (var j = 0; j < friendsArray[i].scores[j].length; j++) {
            differance += Math.abs(parseInt(friendScores[j])) - parseInt(newSurvey[i]);
        }
        console.log(differance)
        }
  });
// next it needs to compare the total scores and choose the lowest score and display the friend picture
// approach: sum the differance of each friend comparison and store the results in an array. 
// match the index of the lowest score with the frind in the array.

  app.post("/api/clear", function() {
    friendsArray = [];
    console.log(friendsArray);
  });
};
