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
  create: function(req, res) {
    const user = {
      Username: req.body.Username,
      Password: req.body.Password,
      SeedName: req.body.SeedName,
      SeedQuantity: req.body.SeedQuantity,
      CropName: req.body.CropName,
      CropQuantity: req.body.CropQuantity,
      IngredientName: req.body.IngredientName,
      IngredientQuantity: req.body.IngredientQuantity,
      Money: req.body.Money
    };
    
   db.User
      .create(user)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
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