const mongoose = require('mongoose');

const SaleModel = new mongoose.Schema(
  {
    sale: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.__v;
        delete ret._id;
        return ret;
      },
    },
  }
);
const Sale = mongoose.model("Sale", SaleModel);

module.exports = Sale;