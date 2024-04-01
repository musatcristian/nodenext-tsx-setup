import { HELPER } from "@Utils/helper.js";
import { IncomingMessage, ServerResponse, createServer } from "http";

const port = 3000;

const requestHandler = (request: IncomingMessage, response: ServerResponse) => {
  // Set CORS headers to allow requests from any origin
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Request-Method", "*");
  response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  response.setHeader("Access-Control-Allow-Headers", "*");

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    const htmlContent: string = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SSR App</title>
      </head>
      <body>
          <h1>Hello from DUDUDU ${HELPER}</h1>
      </body>
      </html>
    `;
    response.end(htmlContent);
  } else {
    // Handle other requests
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("Not Found");
  }
};

const server = createServer(requestHandler);

server.listen(port, () => {
  //   if (err) {
  //     return console.error('Error starting server:', err);
  //   }
  console.log(`Server is running on http://localhost:${port}`, HELPER);
});
