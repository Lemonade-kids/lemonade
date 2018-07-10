var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    Username: {
        type: string, 
        unique: true, 
        required: true
    },
    Password: {
        type: string, 
        require: true
    },
    Seeds: [
        { 
            SeedName: {
                type: string,
                unique: false,
                required: true
            },
            Quantity: {
                type: number
            }
        }
    ],

    Crops: [
        { 
            CropName: {
                type: string,
                unique: false,
                required: true
            },
            Quantity: {
                type: number
            }
        }
    ],
    
    Ingredients: [
        { 
            IngredientName: {
                type: string,
                unique: false,
                required: true
            },
            Quantity: {
                type: number
            }
        }
    ],

    Money: number
});

var User = mongoose.model("User", UserSchema);
module.exports = User;






