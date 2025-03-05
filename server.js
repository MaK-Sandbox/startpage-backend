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
 * Cross-origin resource sharing (CORS) is an HTTP-header based mechanism that allows requests made on behalf of you and also
 * prevents attackers that plant scripts on various websites.
 * Use browser mechanism cross-origin resource sharing (CORS) which enables controlled access to resources located outside of
 * a given domain
 */
app.use(express.json());
app.use(cors());

app.get("/api/computer-info", (req, res) => {
  let result = getComputerData();
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on: http://localhost:${port}`);
});
