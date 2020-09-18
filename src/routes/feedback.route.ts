import express from "express";
import FeedbackController from "../controllers/feedback.controller";
const feedbackRoutes = express.Router();

const feedbackController = new FeedbackController();

//index, show, create, update, delete

feedbackRoutes.get("/feedback", feedbackController.index);
feedbackRoutes.get("/feedback/:id", feedbackController.show);
feedbackRoutes.get("/feedbacks/:idCreator", feedbackController.listByCreator);
feedbackRoutes.post("/feedback", feedbackController.create);
feedbackRoutes.patch("/feedback/:id", feedbackController.update);
feedbackRoutes.delete("/feedback/:id", feedbackController.delete);

export default feedbackRoutes;
