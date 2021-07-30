const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

var orderItemSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: [true, "Quantity is required"]
    },
    product: {
      type: String,
      required: [true, "Product is required"]
    },
  }
)

const orderSchema = new Schema(
  {
    orderItems: [orderItemSchema],
    phone: {
      type: String,
      required: [true, "Phone number is required!"],
      validate: {
        validator: value => validator.isMobilePhone(value),
        message: 'Phone number is invalid!',
      },
    },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
