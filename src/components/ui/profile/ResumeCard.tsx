"use client";
import { dev_base_url } from "@/constants/baseurl";
import {
  DeleteFilled,
  DownloadOutlined,
  EditFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import ResumeForm from "./forms/ResumeForm";
import { ResumeIF } from "@/interface/user.interface";
import { getCookie } from "cookies-next";
import { BsCheckLg } from "react-icons/bs";
interface ResumeInterface {
  resume: ResumeIF[];
}
const ResumeCard = ({ resume }: ResumeInterface) => {
  const token = getCookie("access_token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDownload = async (fileId: string) => {
    const res = await fetch(
      dev_base_url + "/upload/resume/download/" + fileId,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.blob(); // Convert response to Blob

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(data);

    // Create an anchor element
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume"; // Set desired filename here

    // Append anchor to the body
    document.body.appendChild(a);

    // Simulate a click on the anchor to trigger download
    a.click();

    // Remove anchor from the body
    document.body.removeChild(a);

    // Revoke the URL to release the Blob object
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className=" bg-background mt-8 rounded-2xl p-4 drop-shadow-sm">
      <div className="">
        <h1 className="text-primary  text-2xl font-semibold">My Resume</h1>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-blue-500 underline" key={resume[0]?.fileName}>
          {resume[0]?.fileName}
        </p>

        <div className="flex items-center justify-between gap-4">
          {resume.length != 0 ? (
            <DownloadOutlined
              className="hover:cursor-pointer "
              onClick={() => {
                handleDownload(resume[0]?.fileId);
              }}
            />
          ) : (
            <PlusOutlined
              className="hover:cursor-pointer"
              onClick={showModal}
            />
          )}
          <DeleteFilled />
        </div>
      </div>
      <Modal
        title="Work Experience"
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <ResumeForm onCancel={handleCancel} />
      </Modal>
    </div>
  );
};

export default ResumeCard;
