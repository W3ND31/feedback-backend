import { Document, model, Schema } from "mongoose";
import User from "./user.model";

interface FeedbackDoc extends Document {
  creator: typeof User;
  subject: typeof User;
  dateTime: Date;
  improve: [String];
  sustain: [String];
  suggestions: [String];
  finalFeedback: String;
}

const feedbackSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: "user" },
    subject: { type: Schema.Types.ObjectId, ref: "user" },
    dateTime: Date,
    improve: [String],
    sustain: [String],
    suggestions: [String],
    finalFeedback: String,
  },
  { timestamps: true }
);

const Feedback = model<FeedbackDoc>("feedback", feedbackSchema);

export default Feedback;
