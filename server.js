// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.post("/survey", function(req, res) {
	var newSurvey = req.body;
	for (i = 0; i < newSurvey.scores.length; i++) {
			newSurvey.scores[i] = parseInt(newSurvey.scores[i]);
			friendsArray.push(newSurvey);
		}
});

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
