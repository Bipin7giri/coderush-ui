"use client";
import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { classnames } from "../utils/general";
import { languageOptions } from "../constants/languageOptions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { defineTheme } from "../lib/defineTheme";
import useKeyPress from "../hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import { Button, Modal } from "antd";
import ActiveUser from "./ActiveUser";
import { Socket } from "socket.io-client";
import { QuestionIF } from "@/app/app/challenges/fastest-finger/page";
import { BsCheckLg } from "react-icons/bs";

const Landing = ({
  activeUsers,
  question,
  socket,
  userLists,
  currentUser,
  roomId,
}: {
  activeUsers: number;
  socket: Socket;
  userLists: string[];
  currentUser: string;
  roomId: string;
  question: QuestionIF;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (id: string, answer: string) => {
    // handleCompile();
    sendCodeToSocket(id, answer);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [output, setOutput] = useState<any>([]);
  const [code, setCode] = useState("");
  const [customInput, setCustomInput] = useState("//" + question.description);
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState<boolean | null>(null);
  const [theme, setTheme] = useState<any>("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl: any) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action: any, data: any) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      source_code: JSON.stringify(code),
    };
    const options = {
      method: "POST",
      url: "http://localhost:8000/api/v1/app",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        setOutputDetails(response.data);
        showSuccessToast("Success");
        setProcessing(false);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;

        showErrorToast(
          `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
          10000,
        );
        setProcessing(false);
        console.log("catch block...", error);
      });
  };

  function sendCodeToSocket(questionId: string, answer: any) {
    const compoundRoomId = roomId + "-" + questionId;

    socket.emit("send_fastest_finger_data", {
      roomId: compoundRoomId,
      username: currentUser,
      code: JSON.stringify(code),
      answer: answer,
      timer: seconds,
    });
  }
  function handleThemeChange(th: any) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" }),
    );
  }, []);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const showSuccessToast = (msg: any) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg?: any, timer?: any) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    socket.on("receive_fastest_finger_data", (data: any) => {
      if (data) {
        setOutput((prevOutput: any) => [...prevOutput, data]); // Updating state correctly using spread operator
      }
    });
    // return () => {
    //   socket.off("receive_message");
    // };
  }, [socket, roomId]);

  return (
    <div className="bg-slate-300">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="mx-auto flex w-[95%]    flex-row items-center justify-between">
        {/* <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div> */}
        <div className="px-4 py-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
        <div className="flex items-center gap-8">
          <Button
            type="primary"
            className="bg-blue-600"
            size="large"
            shape="default"
            onClick={() => {
              console.log(question.answers[0]);
              debugger;
              showModal(question._id, question.answers[0].output);
            }}
          >
            Run
          </Button>
          <ActiveUser
            currentUser={currentUser}
            userLists={userLists}
            activeUsers={activeUsers}
          />
        </div>
      </div>
      {JSON.stringify(question)}
      <div className="mx-auto mt-8 flex w-[70%] items-center justify-between gap-4 rounded-lg bg-white p-6 shadow-md">
        <div className="">
          <h2 className="text-primary mb-2 text-xl font-bold">
            {question.title}
          </h2>
          <p className="mb-2 text-sm ">Difficulty: {question.difficulty}</p>
          <div
            dangerouslySetInnerHTML={{ __html: question.description }}
            className="mb-4"
          />
        </div>
        <div className="">
          <div className="mb-4 text-6xl font-bold">
            {String(Math.floor(seconds / 3600)).padStart(2, "0")}:
            {String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")}:
            {String(seconds % 60).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start space-x-4 px-4 py-4">
        <div className="flex h-full w-[70%] flex-col items-end justify-start">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>
        {JSON.stringify(output)}
        {/* <div className="flex h-full w-[30%] flex-col ">
          <div className="mt-4 rounded-md bg-[#1A2B34] p-4 text-[#CDD3DE] ">
            <h1 className="mb-2 text-lg font-semibold">Output</h1>
            <div className="">
              {output.map((item: any, index: any) => (
                <div
                  key={index}
                  className="mb-2 flex items-center justify-between"
                >
                  <span className="text-green-500">{item.username}</span>
                  <span className="text-green-500">
                    {item.message.output.trim()}
                  </span>
                  <span className="text-sm text-gray-500">
                    Execution Time: {item.message.executionTime} ms
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Landing;
