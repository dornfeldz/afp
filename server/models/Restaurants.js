const { timeStamp } = require("console")
const mongoose = require("mongoose")
const { type } = require("os")

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    bio: String,
    profilePicture: String,
    cover: String,
    email: {
        type: String,
        require: true,
        lowercase: true
    },
    telephone: Number,
    product: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product"
    },
    adress: {
        street: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        zipcode: {
            type: Number,
            require: true
        }
    },
//An idea for saving the coordinates of the restaurant
   //Asked Claude for this idea, using GeoJSON

   location: {
    type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        required: true
    } 

   },
    

    menu: []
    
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Restaurant", restaurantSchema)