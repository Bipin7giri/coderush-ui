"use client";
import Landing from "@/components/Landing";
import { Button, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:8000");

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLists, setUserLists] = useState<string[]>([]);
  const showModal = () => {
    // handleCompile();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [isRoomJoined, setRoomJoined] = useState(false);
  useEffect(() => {
    socket.on("active_users_count", (data) => {
      if (data.roomId === roomId) {
        console.log(data);
        setUserLists(data.usersLists);
        setActiveUsersCount(data.count);
      }
    });
    return () => {
      socket.off("active_users_count");
    };
  }, [roomId]);

  function joinRoom(values: any) {
    setRoomJoined(true);
    setUsername(values.username);
    setRoomId(values.roomId);
    socket.emit("join_room", {
      roomId: values.roomId,
      username: values.username,
    });
  }

  return (
    <>
      <Modal
        open={isModalOpen}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          className: "bg-red-800",
        }}
      >
        <Form onFinish={joinRoom} layout="vertical">
          <Form.Item name={"username"} label="User name">
            <Input placeholder="username" type="text" />
          </Form.Item>
          <Form.Item name={"roomId"} label="roomid">
            <Input placeholder="roomId" type="text" />
          </Form.Item>
          <Form.Item name={"roomId"}>
            <Button htmlType="submit" type="primary" className="bg-green-400">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {isRoomJoined ? (
        <Landing
          userLists={userLists}
          activeUsers={activeUsersCount}
          socket={socket}
        />
      ) : (
        <div className="flex justify-center items-center h-[100vh]">
          <Button onClick={showModal} type="primary" className="bg-green-400">
            Start Now
          </Button>
        </div>
        // <div className="App">
        //   <input
        //     placeholder="Room ID"
        //     value={roomId}
        //     onChange={(e) => {
        //       setRoomId(e.target.value);
        //     }}
        //   />
        //   <button onClick={joinRoom}>Join Room</button>
        //   <h1>Active Users Count: {activeUsersCount}</h1>
        // </div>
      )}
    </>
  );
}
