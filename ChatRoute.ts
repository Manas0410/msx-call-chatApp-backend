import express, { Request, Response } from "express";
import { data } from "./data";

const chatRouter = express.Router();

chatRouter.get("/:meetingId", (req: Request, res: Response) => {
  const { meetingId } = req.params;
  const messages = data.filter((item) => item.meetingId === meetingId);
  const message = messages[messages.length - 1];
  res.status(200).send([message]);
});

chatRouter.post("/", (req: Request, res: Response) => {
  const { userId, meetingId, message, time } = req.body;

  const newData = { userId, meetingId, message, time };
  data.push(newData);
  res.status(201).send("new data added");
});

export default chatRouter;
//
//
