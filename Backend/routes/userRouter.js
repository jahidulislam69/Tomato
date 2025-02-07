import express from "express"
import { loginUser, registernUser } from "../controllers/userController.js"

const userRouter = express.Router();


userRouter.post("/register", registernUser)
userRouter.post("/login", loginUser)


export default userRouter;


