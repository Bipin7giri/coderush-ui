"use client";
import Landing from "@/components/Landing";
import FastestFinger from "@/components/ui/challenges/fastesFingure/FastestFinger";
import TrendingChallenges from "@/components/ui/prepare/TrendingChallanges";
import CompleteChallengesCard from "@/components/ui/profile/CompleteChallengesCard";
import { dev_base_url } from "@/constants/baseurl";
import { getMe } from "@/services/users/user.service";
import _default from "@ant-design/icons/lib/icons/FastForwardFilled";
import { Button, Form, Input, Modal } from "antd";
import { getCookie, getCookies } from "cookies-next";
import React, { use, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
export interface QuestionIF {
  title: string;
  _id: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  created_at: Date;
  updated_at: Date;
  answers: any[];
}
const socket: Socket = io("https://coderush-backend.onrender.com");

const Page = () => {
  const [questions, setQuestions] = useState<QuestionIF[] | null>();
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionIF>();
  const getAllQuestion = async () => {
    const res = await fetch(dev_base_url + "/question", {
      method: "GET",
    });
    const data = await res.json();
    return data.data;
  };
  const [questionId, setQuestionId] = useState("");
  const [user, setUser] = useState<{ username: string; id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userLists, setUserLists] = useState<string[]>([]);
  const showModal = (questionId: string) => {
    // handleCompile();
    const question: any = questions?.filter(
      (item) => item._id === questionId,
    )[0];
    setSelectedQuestion(question);
    setIsModalOpen(true);
    setQuestionId(questionId);
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
    socket.on("active_join_fastest_finger_count", (data) => {
      if (data.roomId === roomId && data.questionId === questionId) {
        setUserLists(data.usersLists);
        setActiveUsersCount(data.count);
      }
    });
    return () => {
      socket.off("active_join_fastest_finger_count");
    };
  }, [roomId]);

  function joinRoom(values: any) {
    setRoomJoined(true);
    setUsername(values.username);
    setRoomId(values.roomId);
    socket.emit("join_fastest_finger_room", {
      roomId: values.roomId,
      questionId: questionId,
      username: user?.username,
    });
    setRoomJoined(true);

    handleOk();
  }

  useEffect(() => {
    const jwtToken = getCookie("access_token");
    getMe(jwtToken as string).then((data) => {
      setUser({
        username: data.data.username,
        id: data.data._id,
      });
    });
    getAllQuestion().then((data) => {
      setQuestions(data.questions);
    });
  }, []);
  return !isRoomJoined ? (
    <div className="mx-auto mt-8 max-w-[1280px]">
      {questions && (
        <TrendingChallenges questions={questions} showModal={showModal} />
      )}
      <FastestFinger />
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
          <Form.Item name="roomId" label="Room ID">
            <Input placeholder="Room ID" type="text" />
          </Form.Item>
          <Form.Item className="flex items-center justify-end">
            <Button htmlType="submit" type="primary" className="bg-primary">
              Join
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  ) : userLists?.length <= 1 ? (
    <div className="flex h-screen items-center justify-center space-x-2 bg-white">
      <div className="flex items-center justify-between">
        <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 animate-bounce rounded-full bg-black"></div>
      </div>
      <div className="">waiting for your friend hold on tight...</div>
    </div>
  ) : (
    <Landing
      question={selectedQuestion as any}
      currentUser={username}
      roomId={roomId}
      userLists={userLists}
      activeUsers={activeUsersCount}
      socket={socket}
    />
  );
};

export default Page;
