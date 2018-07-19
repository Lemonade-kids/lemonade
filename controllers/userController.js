const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
   db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
   db.User
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  // if user found, then set session and return user
  login: function(req, res) {
    const {user, pwd} = req.body;
    console.log("login", req.body);
    db.User
       .findOne({user, pwd})
       .then(dbUser => {
         if(dbUser.length) {
          req.session.userId = dbUser._id;
          res.json(dbUser);
         } else {
           // access denied
           res.status(403).json(dbUser);
         }
       })
       .catch(err => {
         console.log(err)
         res.status(403).json(err);
       })
   },

   create: function(req, res) {
     const {user, pwd } = req.body;
     db.User
       .find({user})
       .then(dbUser => {
         if(dbUser.length) {
          res.status(404).send("Username already exists");
         } else {
           return db.User.create(req.body).then((user) => {
             res.json(user);
           })
         }
       })
       .catch(err => res.status(404).json(err));
   },
  update: function(req, res) {
   db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
   db.User
      .findById({ _id: req.params.id })
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};