// = Database configuration ================================================
mongoose.connect('mongodb://localhost/mongoosescraper');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});
db.once('open', function () {
    console.log('Mongoose connection successful.');
});

// = Require Schemas ================================================================
var LemonadeMongo = require("LemonadeMongo.js");

// = JSoN obj

newUser = {
"Username":" ",
"Password":" ",
"Seeds": {
    "seed1":"lemon", 
    "seed2":"blueberry", 
    "seed3":"squash"
    },
"Crops": {
    "crop1":"lemon",
    "crop2":"blueberry", 
    "crop3":"squash"
    },
"Ingredients":{
    "ingredient1":"flour", 
    "ingredient2":"sugar", 
    "ingredient3":"eggs"
    }

};