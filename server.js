const express = require("express");
const getComputerData = require("./os.js");
const app = express();
const port = 3000;

let result = getComputerData();
console.log(result);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on: http://localhost:${port}`);
});
