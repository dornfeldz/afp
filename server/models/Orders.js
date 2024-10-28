const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    order_number: {
        type: Number,
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    address: {
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
    total_price: {
        type: Number,
        required: true
    },
    tip: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Order", ordersSchema);
