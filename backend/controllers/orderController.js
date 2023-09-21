import asyncHandler from "../middleware/asyncHandler.js";
import Order from '../models/ordermodel.js';

//description:  Create new order
//route:        POST /api/orders
//access:       Private
const addOrderItems = asyncHandler(async(req, res) => {
  res.send('add order items');
})

//description:  Get logged in user orders
//route:        GET /api/orders/myorders
//access:       Private
const getMyOrders = asyncHandler(async(req, res) => {
  res.send('get my order items');
})

//description:  Get order by ID
//route:        GET /api/orders/:id
//access:       Private
const getOrderById = asyncHandler(async(req, res) => {
  res.send('get order by ID');
})

//description:  Update order to paid
//route:        GET /api/orders/:id/pay
//access:       Private
const updateOrderToPaid = asyncHandler(async(req, res) => {
  res.send('updateOrderToPaid');
})

//description:  Update order to deliver
//route:        GET /api/orders/:id/deliver
//access:       Private
const updateOrderToDelivered = asyncHandler(async(req, res) => {
  res.send('updateOrderToDelivered');
})

//description:  Get all order
//route:        GET /api/orders
//access:       Private/admin
const getOrders = asyncHandler(async(req, res) => {
  res.send('get all orders');
})

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders
};