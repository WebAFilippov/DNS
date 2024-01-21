import asyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken';

import { User } from "../models/userModel.js";

export const auth = asyncHandler(async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(" ")[1]

    const secretJWT = process.env.SECRET_JWT
    const decoded = jwt.verify(token, secretJWT)

    const user = await User.findById({
      _id: decoded.id
    })

    req.user = user

    next()
  } catch (error) {
    return res.status(401).json({ message: "Пользователь не авторизован" })
  }
})
