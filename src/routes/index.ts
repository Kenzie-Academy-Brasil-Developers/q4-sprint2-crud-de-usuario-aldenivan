import { Router } from "express";
import userRouter from "./user/indes";

const router = Router();

router.use(userRouter);

export default router;
