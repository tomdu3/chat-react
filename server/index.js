const express = require("express");
const app = express();
const http = require("https");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'https:://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on("connection", (socket) => {
  console.log(`A user:${socket.id} connected.`);

  socket.on("disconnect", () => {
    console.log(`A user:${socket.id} disconnected.`);
  });
});

server.listen(3001, () => {
  console.log("Server running.");
});
