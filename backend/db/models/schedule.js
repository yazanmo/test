const mongoose = require("mongoose");

const schedule = new mongoose.Schema({
  date: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
  status: { type: String, required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "buyer" },
});

module.exports = mongoose.model("schedule", schedule);
