import { dev_base_url } from "@/constants/baseurl";
import { ResumeIF } from "@/interface/user.interface";
import { Button, Form, notification } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { getCookie } from "cookies-next";
import React from "react";
interface ResumeInterface {
  onCancel: () => void;
}
const ResumeForm = ({ onCancel }: ResumeInterface) => {
  const token = getCookie("access_token");

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch(dev_base_url + "/upload/resume", {
        method: "POST",
        headers: {
          Authorization: `${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const responseData = await response.json();
      console.log("File uploaded successfully:", responseData);
      // Handle success
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
      // Handle error
    }
  };
  return (
    <Form
      onFinish={onCancel}
      layout="vertical"
      className="grid grid-cols-2 gap-2"
    >
      <Form.Item
        label="Avatar"
        name="avatar"
        className="font-manrope font-semibold text-[13px] col-span-2"
        rules={[{ required: false, message: "Please enter your username" }]}
      >
        <Dragger
          customRequest={({ file, onSuccess, onError }: any) => {
            uploadFile(file as File).then(() => {
              onSuccess();
            });
          }}
        >
          <p className="ant-upload-drag-icon"></p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </Form.Item>

      <Form.Item className="col-span-2 flex justify-end">
        <Button
          size="large"
          className="w-full   rounded-lg  bg-primary text-white"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResumeForm;
