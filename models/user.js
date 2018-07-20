var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    user: {
        type: String, 
        unique: true, 
        required: true
    },
    pwd: {
        type: String, 
        require: true
    },

    // SeedName: {
    //     type: String,
    //     unique: false,
    //     required: true
    //         },
    // SeedQuantity: {
    //     type: Number
            
    //     },

    // CropName: {
    //     type: String,
    //     unique: false,
    //     required: true
    //         },
    // CropQuantity: {
    //     type: Number
        
    //     },
    

    // IngredientName: {
    //     type: String,
    //     unique: false,
    //     required: true
    //         },
    // IngredientQuantity: {
    //             type: Number
    //     },
   

    // Money: {
    //     type: Number
    // }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;






