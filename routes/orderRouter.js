const express = require('express')
const Order = require('../models/order')

const orderRouter = new express.Router()

orderRouter.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find()
    res.status(200).send(orders)
  } catch (e) {
    res.status(400).send(e)
  }
})

orderRouter.get('/orders/:orderId', async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.orderId })
    if (!order) {
      return res.status(404).send({ error: 'Order not found!' })
    }
    res.send(order)
  } catch (e) {
    res.status(500).send(e)
  }
})

orderRouter.post('/orders', async (req, res) => {
  const order = new Order(req.body)

  try {
    await order.save()
    res.status(201).send(order)
  } catch (e) {
    res.status(422).send(e)
  }
})

module.exports = orderRouter
