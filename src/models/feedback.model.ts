import { Document, model, Schema } from "mongoose";

interface FeedbackDoc extends Document {
  creator: string;
  subject: string;
  feedbackDate: Date;
  improvePoints: string;
  keepPoints: string;
  suggestions: string;
  finalFeedback: String;
}

const feedbackSchema = new Schema(
  {
    creator: String,
    subject: String,
    feedbackDate: Date,
    improvePoints: String,
    keepPoints: String,
    suggestions: String,
    finalFeedback: String,
  },
  { timestamps: true }
);

const Feedback = model<FeedbackDoc>("feedback", feedbackSchema);

export default Feedback;
