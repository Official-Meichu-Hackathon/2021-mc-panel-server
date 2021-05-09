import express from 'express';
import controller from '../controller';

const userRouter = express.Router();

userRouter.post('/register', controller.user.register);

export default userRouter;
