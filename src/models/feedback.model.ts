import { model, Schema } from "mongoose";

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

const Feedback = model("feedback", feedbackSchema);

export default Feedback;
