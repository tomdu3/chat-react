const express = require("express");
const app = express();
const http = require("https");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("Server running.");
});
