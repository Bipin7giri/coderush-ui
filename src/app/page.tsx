"use client";
import Landing from "@/components/Landing";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:8000");

export default function Home() {
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [roomId, setRoomId] = useState("");
  const [isRoomJoined, setRoomJoined] = useState(false);
  useEffect(() => {
    socket.on("active_users_count", (data) => {
      if (data.roomId === roomId) {
        console.log(data);
        setActiveUsersCount(data.count);
      }
    });
    return () => {
      socket.off("active_users_count");
    };
  }, [roomId]);

  function joinRoom() {
    setRoomJoined(true);
    socket.emit("join_room", roomId);
  }

  return (
    <>
      {isRoomJoined ? (
        <Landing activeUsers={activeUsersCount} socket={socket} />
      ) : (
        <div className="App">
          <input
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
          />
          <button onClick={joinRoom}>Join Room</button>
          <h1>Active Users Count: {activeUsersCount}</h1>
        </div>
      )}
    </>
  );
}
