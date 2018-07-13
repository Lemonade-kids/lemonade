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
var Mongo = require("MongoDB.js");

var newuser = {"username": req.User.Username};
req.newData.Username = req.User.Username;
MyModel.findOneAndUpdate(newuser, req.newData, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved username");
});

var password = {"password": req.User.Password};
req.newData.Password = req.User.Password;
MyModel.findOneAndUpdate(password, req.newData, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved password");
});

var seedsQ = {"seed-name": req.User.Seeds.SeedName, "seed-quantity": req.User.Seeds.Quantity};
MyModel.findOneAndUpdate(seedsQ, {"seed-quantity" : req.newData.Seeds.Quantity}, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved seed quantity");
});
 