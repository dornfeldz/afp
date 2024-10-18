const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({

    category: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },


    
})

module.exports = mongoose.model("Menu", menuSchema)