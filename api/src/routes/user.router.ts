import { Router } from "express";
import { createUser, disableUser, getUser, loginUser, userPut } from "../controllers/user.controller";

const userRouter = Router()

userRouter.get('/user', getUser)
userRouter.post('/user/create', createUser)
userRouter.post('/user/login', loginUser)
userRouter.put('/user/put', userPut)
userRouter.delete('/user/disable', disableUser)

export default userRouter