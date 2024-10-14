const mongoose = require("mongoose")
const { type } = require("os")

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    telephone: Number,
    delivery_adress: {
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
    }
}
)

module.exports = mongoose.model("Users", restaurantSchema)