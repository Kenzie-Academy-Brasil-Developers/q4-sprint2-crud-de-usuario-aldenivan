import express, { json, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes";
dotenv.config();

const app = express();
app.use(json());
app.use(router);

export default app;
