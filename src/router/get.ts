import { createReadStream } from "fs";
import type { IncomingMessage, ServerResponse } from "http";
import { join } from "path";
import { HELPER, getDirName } from "src/utils/index.js";

export const getRouter = async (req: IncomingMessage, res: ServerResponse) => {
  switch (req.url) {
    case "/favicon.ico": {
      res.end(null);
      break;
    }
    case "/": {
      try {
        const s = createReadStream(
          join(getDirName(import.meta.url), "../index.html")
        );
        s.on("error", (error) => {
          res.writeHead(404);
          res.end(error.message);
        });

        let data = Buffer.alloc(0);

        s.on("data", (chunk: Buffer) => {
          data = Buffer.concat([data, chunk], data.length + chunk.length);
        });

        s.on("end", () => {
          res.writeHead(200, {
            "Content-Type": "text/html",
          });

          const html = data.toString().replace("{{HELPER}}", HELPER);

          res.end(html);

          // ALSO
          // s.pipe(res);
        });
      } catch (error) {
        throw new Error(error.message);
      }

      break;
    }
    default: {
      res.end("PONG");
    }
  }
};
