import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function checkAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const token2: string = req.cookies.token;
    const key: string | undefined = process.env.JWT_SECRET_KEY
    const verified: string | jwt.JwtPayload = jwt.verify(token2, key as string);

    if (verified) {
      next();
    } else {

      res.render("frontpage/login", { error: "something went wrong!!" });
    }
  } catch (error) {

    res.render("frontpage/login", { error: "something went wrong!!" });
  }
}
export default checkAuth;
