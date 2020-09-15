import mongoose from "mongoose";

const User = mongoose.model(
  "user",
  new mongoose.Schema(
    {
      name: String,
      username: String,
      hash: String,
    },
    { timestamps: true }
  )
);

export default User;
