import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/usermodel.js'

// @description: Auth user & get token
// @route: GET /api/users/login
// @access: Public
const authUser = asyncHandler(async(req, res) => {
  res.send('auth user')
})

// @description: Register user
// @route: POST /api/users
// @access: Public
const registerUser = asyncHandler(async(req, res) => {
  res.send('register user')
})  

// @description: Logout user/clear cookies
// @route: POST /api/users/logout
// @access: Private
const logoutUser = asyncHandler(async(req, res) => {
  res.send('logout user')
})

// @description: Get user Profile
// @route: GET /api/users/profile
// @access: Private
const getUserProfile = asyncHandler(async(req, res) => {
  res.send('get user profile')
})

// @description: Update user Profile
// @route: PUT /api/users/profile
// @access: Private
const updateUserProfile = asyncHandler(async(req, res) => {
  res.send('update user profile')
})

// @description: Get users
// @route: GET /api/users
// @access: Private/Admin
const getUsers = asyncHandler(async(req, res) => {
  res.send('get users')
})

// @description: Get users by ID
// @route: GET /api/users/:id
// @access: Private/Admin
const getUsersByID = asyncHandler(async(req, res) => {
  res.send('get users by id')
})

// @description: Delete user
// @route: DELETE /api/users/:id
// @access: Private/Admin
const deleteUser = asyncHandler(async(req, res) => {
  res.send('delete users')
})

// @description: update user
// @route: PUT /api/users/:id
// @access: Private/Admin
const updateUser = asyncHandler(async(req, res) => {
  res.send('update users')
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersByID,
  updateUser
}
