const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.get('/', (req, res) => res.send('Dbautomaters backend is live!'));

// Example Socket.io connection
io.on('connection', (socket) => {
  console.log('Frontend connected via WebSocket');
  // Example: send dummy tick every second
  setInterval(() => {
    socket.emit('tick', { price: Math.random() * 1000 });
  }, 1000);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
