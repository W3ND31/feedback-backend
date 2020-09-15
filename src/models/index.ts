import mongoose from "mongoose";
import dbConfig from "../config/db.config";
import Feedback from "./feedback.model";
import User from "./user.model";

mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  url: dbConfig.url,
  users: User,
  feedbacks: Feedback,
};

export default db;
