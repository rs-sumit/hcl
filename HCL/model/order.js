const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },

  customer: {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    
    address: {
      type: String,
      required: true,
    },
  },

  items: [
    {
      name: {
        type: String,
        required: true,
      },

      qty: {
        type: Number,
        required: true,
        min: 1,
      },

      price: {
        type: Number,
        required: true,
      },
    },
  ],

  totalPrice: {
    type: Number,
    required: true,
  },

  orderStatus: {
    type: String,
    default: "pending", // pending | confirmed | delivered | cancelled
  },

  created_at: {
    type: Date,
    default: new Date(),
  },

  updated_at: {
    type: Date,
    default: null,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
