const mongoose = require("mongoose")
const { type } = require("os")

const ordersSchema = new mongoose.Schema({

    order_number: {
        type: Number,
        require: true
    },
    restaurant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Restaurant"
    },
    items: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product"
        //Ez asszem még nincs meg
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
    total_price: {
        type: Number,
        require: true
    },
    tip: {
        type: Number,
        require: true
    }
    //Ideas for later
    /*order_date: {
        type: Date,
        require: true
    },
    delivery_date: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        require: true
    }*/ 
   //Ideas for later

    
}
)

module.exports = mongoose.model("Orders", restaurantSchema)