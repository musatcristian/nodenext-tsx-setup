import type { IncomingMessage, ServerResponse } from "http";
import { getRouter } from "./get.js";

export const router = async (req: IncomingMessage, res: ServerResponse) => {
  switch (req.method) {
    case "GET": {
      return getRouter(req, res);
    }
    default: {
      res.end("PONG");
    }
  }
};
