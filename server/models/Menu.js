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

    
})

module.exports = mongoose.model("Menu", menuSchema)