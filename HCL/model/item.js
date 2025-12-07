const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  currentPrice: {
    type: Number,
    required: true,
  },

  discount: {
    type: Number,
    default: 0,
  },

  description: {
    type: String,
    required: true,
  },

  foodType: {
    type: String,
    enum: ["veg", "non-veg"],
    required: true,
  },

  stock: {
    type: Number,
    required: true,
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

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
