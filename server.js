const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const userController = require("./controllers/userController");

// Configure body parser for Axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.set('trust proxy', true);
app.use(cookieSession({
  name: 'session',
  keys: ['S5?!fY3;A/Fyk5?7KC2c(!Q&5}Qgn.yKUxqPf[c-'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

/*app.use(function(req, res, next) {
  if(req.session.userId) {
    next();
  } else {
    res.status(403).send("Access denied");
  }
});*/

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/lemonade",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);