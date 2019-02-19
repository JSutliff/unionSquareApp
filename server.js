// ================= Dependencies =====================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'DhZYrvefw4wW-gOaaQqOig',
  consumer_secret: 'consumer-secret',
  token: 'Bu2a7E4kGc8i8h3dt3gzW5ZbjJkLbcNDiCty75IgIRsPNLMnh6GZ8SKCvu_sqhIwAwgtGsLXYICX8yVR-LqKM7dFjN-6l7Y5MOdL_WAYAkh4hJl3XyTKWE4OQuNPXHYx',
  token_secret: 'token-secret',
});

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
var publicPath = path.resolve(__dirname, 'public');
var staticPath = path.resolve(__dirname, 'assets');

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(staticPath));


app.get('/', function (req, res) {
  res.sendFile(publicPath + '/index.html')
})

app.get('/shopping', function (req, res) {
  res.sendFile(publicPath + '/shopping.html')
})

app.get('/all', function (req, res) {
  res.sendFile(publicPath + '/all.html')
  
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});