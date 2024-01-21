import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    userInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserInfo"
    },
  },
  {
    timestamps: true,
  }
);

const userInfoSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    nickname: {
      type: String,
    },
    imageUrl: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
)

export const User = mongoose.model("User", userSchema);
export const UserInfo = mongoose.model("UserInfo", userInfoSchema)

