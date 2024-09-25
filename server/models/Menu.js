const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({

    restaurant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Restaurant"
    },

    menu: {
        type: String,
        require: true
    } ,
    price: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("Menu", menuSchema)