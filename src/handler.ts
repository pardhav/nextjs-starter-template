import { NextApiRequest, NextApiResponse } from "next";
import nextConnect, { NextConnect } from "next-connect";

export default function getHandler(): NextConnect<
  NextApiRequest,
  NextApiResponse
> {
  const handler = nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res) => {
      res.status(500).json({ message: "Internal Server Error" });
    },
    onNoMatch: (req, res) => {
      res.status(405).json({ message: "Route Not Found" });
    },
  });
  /**
   * you can add multiple middleware same like express.js,
   *  add next() to bottom or middleware to pass to next middleware handler
   */
  handler.use(async (req, res, next) => {
    //first handler
    next();
  });
  handler.use(async (req, res, next) => {
    //second handler
    next();
  });
  return handler;
}
