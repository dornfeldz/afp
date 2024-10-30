// Zoli módosítást kér, majd meg kell csinálni

const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: String,
    profilePicture: String,
    cover: String,
    email: {
        type: String,
        required: true,
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
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zipcode: {
            type: Number,
            required: true
        }
    },
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
    

    menu: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Menu"
    }],
    
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Restaurant", restaurantSchema)