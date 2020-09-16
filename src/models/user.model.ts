import mongoose, { Document, model } from "mongoose";
interface UserDoc extends Document {
  username: string;
  hash: string;
}
const userSchema = new mongoose.Schema(
  {
    username: { type: String, lowercase: true, index: true, unique: true },
    hash: { type: String, required: true },
  },
  { timestamps: true }
);
const User = model<UserDoc>("user", userSchema);

export default User;
