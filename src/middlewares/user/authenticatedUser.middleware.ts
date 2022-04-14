import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { configs } from "../../configs";

const authenticatedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  let token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, configs.secretKey, (err, decode) => {
    if (err) {
      return res.status(401).json({ message: "Missing authorization headers" });
    } else {
      req.email = decode.email;
      return next();
    }
  });
};

export default authenticatedUser;
