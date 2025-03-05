const express = require("express");
const cors = require("cors");
const getComputerData = require("./os.js");

const app = express();
const port = 3000;

/**
 * Middleware:
 *
 * Express.json() is a built-in middleware function that is used to parse JSON data sent i nthe request body.
 * With this function, our express application is allowed to handle JSON-encoded data.
 *
 * Cross-origin resource sharing (CORS) is an HTTP-header based mechanism and a security feature.
 * Cors are built into web browsers that controls how web pages can request resources from a different domain (or origin).
 * Cors allow a server to specify which origins are allowed to access its resources.
 */
app.use(express.json());
app.use(cors());

app.get("/api/computer-info", (req, res) => {
  let result = getComputerData();
  res.json(result);
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Example app listening on: http://localhost:${port}`);
});
