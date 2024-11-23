const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    order_number: {
      type: Number,
      required: true,
    },
    users: {
      type: String,
      //   required: true,
    },
    items: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zipcode: {
        type: Number,
        required: true,
      },
    },
    total_price: {
      type: Number,
      required: true,
    },
    tip: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", ordersSchema);
