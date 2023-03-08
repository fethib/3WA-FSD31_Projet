import { createServer } from "http";
import { Server } from "socket.io";

// Server Events
import createRoom from "./events/createRoom.js";

//* Create the server
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

//* Create an array to store the rooms
let rooms = [];
const MAX_USERS_PER_ROOM = 10;

//* Listen on events after a user is connected via WebSockets
io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  //* CREATE ROOM
  //? Gets called by a SvelteKit form action when a fills the form to create a game
  //? Returns the room ID to the client for redirection and adds a room object to the rooms array
  //? Sets a timeout to delete the room if it is empty after 60 seconds
  //? Disconnects the socket immediately after the room is created because the client is not needed anymore
  socket.on("createRoom", async (data) => {
    // Query the API to get the questions and create the room object
    const room = await createRoom(data, rooms);

    if (room) {
      console.log("Room created: " + room.id);
      rooms.push(room);

      // Send the room ID to the client
      socket.emit("roomCreated", room.id);
    }

    // Disconnect the socket
    setTimeout(() => {
      socket.disconnect();
    }, 5000);
  });

  //* JOIN ROOM
  //? Gets called when a user goes to a room URL
  //? Checks if the room exists and if it is not full
  //? Adds the user to the room and sends the room object to the client
  socket.on("joinRoom", (roomId) => {
    const room = rooms.find((room) => room.id === roomId);

    console.log("User wants to join room: " + roomId);

    if (room) {
      console.log("Room found: " + room.id);
      if (room.users.length < MAX_USERS_PER_ROOM && room.status === "pending") {
        console.log("User joined room: " + room.id);
        room.users.push({ id: socket.id, name: "Sauce Andalouse" });
        socket.join(roomId);
        socket.emit("roomJoined", room);
      } else {
        console.log("Room full: " + roomId);
        socket.emit("roomFull");
      }
    } else {
      console.log("Room not found: " + roomId);
      socket.emit("roomNotFound");
    }

    console.log(rooms);
    console.log(io.sockets.adapter.rooms);
  });

  //* DISCONNECT
  //? Gets called when a user disconnects from the server
  //? Filters the rooms array to remove any empty rooms
  socket.on("disconnect", () => {
    console.log("A user disconnected: " + socket.id);

    // Delete the empty rooms
    rooms = rooms.filter((room) => room.users.length > 0);
  });
});

//* Listen on port 3051
io.listen(3051);
