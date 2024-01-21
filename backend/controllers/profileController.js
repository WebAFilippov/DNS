import asyncHandler from "express-async-handler"

import dotenv from "dotenv"
dotenv.config();

import { User } from './../models/userModel.js';

/**
* @route /api/profile/:id 
* @desc GET Получить профиль
* @access Public
*/
const getProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById({ _id: id }).populate("userInfo").select("-password")

    return res.status(200).json({ message: "cool", user })
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }


})

export { getProfile }
