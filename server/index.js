const express = require("express");
const app = express();
const http = require("https");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

io.on("connection", (socket) => {
  console.log(`A user:${socket.id} connected.`);

  socket.on("disconnect", () => {
    console.log(`A user:${socket.id} disconnected.`);
  });
});

server.listen(3000, () => {
  console.log("Server running.");
});
