var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var config = require('./config')
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var corsOptions = {
    origin: 'http://localhost:3000'
};


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}));
app.use(express.static(__dirname + '/public'));
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsprofiles)


app.listen(3000, function() {
    console.log("Listening on port 3000")
});