import { createServer } from "http";
import { router } from "src/router/index.js";

const port = 3000;

const server = createServer();

server.on("request", router);

server.listen(port, "127.0.0.1", () => {});
