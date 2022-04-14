import { Router } from "express";
import {
  getUserController,
  createUserController,
  loginUserController,
  getUserProfileController,
  updateUserController,
  deleteUserController,
} from "../../controllers";
import {
  authenticatedUser,
  userAdmAuthenticated,
  validateShape,
} from "../../middlewares";
import { createUserShape, loginUserShape } from "../../shapes";

const userRouter = Router();

userRouter.get(
  "/users",
  authenticatedUser,
  userAdmAuthenticated,
  getUserController
);

userRouter.post("/users", validateShape(createUserShape), createUserController);

userRouter.post("/login", validateShape(loginUserShape), loginUserController);

userRouter.get("/users/profile", authenticatedUser, getUserProfileController);

userRouter.patch(
  "/users/:uuid",
  authenticatedUser,
  userAdmAuthenticated,
  updateUserController
);

userRouter.delete(
  "/users/:uuid",
  authenticatedUser,
  userAdmAuthenticated,
  deleteUserController
);

export default userRouter;
