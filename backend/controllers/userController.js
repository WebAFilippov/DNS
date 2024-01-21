import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
dotenv.config();

import { User, UserInfo } from "../models/userModel.js";

/**
* @route /api/user/login 
* @desc POST Вход email + password
* @access Public
*/
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const token = req.headers.authorization?.split(" ")[1]

  if (!email || !password) return res.status(400).json({ message: "Пожалуйста заполните все поля" })

  const user = await User.findOne({ email: email })
  const currentPassword = user && bcrypt.compare(password, user.password)

  const secretJWT = process.env.SECRET_JWT

  if (currentPassword && secretJWT) {
    res.status(200).json({
      id: user.id,
      email: user.email,
      token: jwt.sign({ id: user.id }, secretJWT, { expiresIn: "1d" }),
    })
  } else {
    return res.status(400).json({ message: "Неверно введен логин или пароль" })
  }
});

/**
* @route /api/user/register 
* @desc POST Регистрация email + password
* @access Public
*/
const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.status(400).json({ message: "Пожалуйста заполните все поля" })

  const regUser = await User.findOne({ email: email })

  if (regUser) {
    return res.status(400).json({ message: "Такой пользователь уже существует" })
  }

  const userInfo = await UserInfo.create({
    nickname: `Пришелец-${await getPrefixNickname()}`
  })
  userInfo.save()

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log(hashedPassword)

  const user = await User.create({
    email: email,
    password: hashedPassword
  })
  user.userInfo = userInfo
  user.save()

  const secretJWT = process.env.SECRET_JWT

  if (user && secretJWT) {
    return res.status(201).json({
      id: user.id,
      email: user.email,
      token: jwt.sign({ id: user.id }, secretJWT, { expiresIn: "1d" }),
    })
  } else {
    return res.status(400).json({
      message: "Не удалось осздать пользователя"
    })
  }
});

/**
* @route /api/user/current
* @desc GET Текущий пользователь
* @access Public
*/
const current = asyncHandler(async (req, res) => {
  return res.status(200).json(req.user)
});

export { login, register, current };