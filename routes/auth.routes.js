import { Router } from "express";
import { signOut, signUp, signIn } from "../controllers/auth.controller.js";

const authRouter = Router()

// path: /api/v1/auth/sign-up || sign-in || sign-out
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

export default authRouter;