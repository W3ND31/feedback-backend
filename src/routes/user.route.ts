import express from "express";
import UserController from "../controllers/user.controller";
const userRoutes = express.Router();

const userController = new UserController();

//index, show, create, update, delete

userRoutes.get("/usuario", userController.index);
userRoutes.get("/usuario/:id", userController.show);
userRoutes.post("/usuario", userController.create);
userRoutes.patch("/usuario/:id", userController.update);
userRoutes.delete("/usuario/:id", userController.delete);

export default userRoutes;
