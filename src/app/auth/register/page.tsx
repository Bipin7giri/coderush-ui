"use client";
import { dev_base_url } from "@/constants/baseurl";
import { InboxOutlined } from "@ant-design/icons";
import { Avatar, Button, Checkbox, Form, Input, notification } from "antd";
import Dragger from "antd/es/upload/Dragger";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface RegisterFromIF {
  username: string;
  email: string;
  password: string;
  avatar: string;
}
export default function Page() {
  const navigation = useRouter();
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await fetch(dev_base_url + "/upload/avatar", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const responseData = await response.json();
      setFileUrl(responseData.data);
      console.log("File uploaded successfully:", responseData);
      // Handle success
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
      // Handle error
    }
  };
  const onFinish = async (values: RegisterFromIF) => {
    setLoading(true);
    values.avatar = fileUrl;
    try {
      const response = await fetch(dev_base_url + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const data = await response.json();
        navigation.push("/auth/login");
        console.log(data); // handle successful login response
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message); // handle login failure
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    setLoading(false);
  };
  return (
    <div className="bg-[#f5f5f5] overflow-y-auto">
      <div className="flex justify-center items-center h-screen overflow-y-hidden">
        <div className="bg-background w-[600px] px-12 py-8 h-auto border-2 border-gray-200  rounded-xl border-solid">
          <h1 className="lg:text-[24px] text-primary md:text-[16px] sm:[14px] font-manrope font-extrabold text-[24px]">
            Register to get start your coding journey.
          </h1>
          <p className="text-primary-2">
            Please register using your credentials.
          </p>
          {/*social media*/}
          <div className="flex justify-around items-center lg:gap-x-4 md:gap-x-3 sm:gap-x-2  mt-5"></div>
          <div className="">
            <Form
              onFinish={onFinish}
              layout="vertical"
              className="grid grid-cols-2 gap-2"
            >
              <Form.Item
                label="Full Name"
                name="fullName"
                className="font-manrope font-semibold text-[13px] col-span-1"
                rules={[
                  { required: true, message: "Please enter your full name!" },
                ]}
              >
                <Input placeholder="Full Name" className="py-2" />
              </Form.Item>

              <Form.Item
                label="User Name"
                name="userName"
                className="font-manrope font-semibold text-[13px] col-span-1"
                rules={[
                  { required: true, message: "Please enter your username" },
                ]}
              >
                <Input placeholder="username" type="text" className="py-2" />
              </Form.Item>

              <Form.Item
                label="Avatar"
                name="avatar"
                className="font-manrope font-semibold text-[13px] col-span-2"
                rules={[
                  { required: false, message: "Please enter your username" },
                ]}
              >
                <Dragger
                  customRequest={({ file, onSuccess, onError }: any) => {
                    uploadFile(file as File).then(() => {
                      onSuccess();
                      notification.info({
                        message: "File Uploaded Successfully",
                      });
                    });
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <Avatar>Avatar</Avatar>
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                </Dragger>
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                className="font-manrope font-semibold text-[13px]"
                rules={[
                  { required: true, message: "Please enter your email!" },
                ]}
              >
                <Input
                  placeholder="Email"
                  type="email"
                  className="py-2 font-manrope font-semibold text-[13px]"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                className="font-manrope font-semibold text-[13px]"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  className="py-2 font-manrope font-semibold text-[13px]"
                />
              </Form.Item>
              <Form.Item
                name="agreeToTerms"
                valuePropName="checked"
                className="col-span-2"
                rules={[
                  {
                    required: true,
                    message:
                      "You must agree to the Terms of Service and Privacy Policy.",
                  },
                ]}
              >
                <Checkbox>
                  I agree to the Terms of Service and Privacy Policy
                </Checkbox>
              </Form.Item>
              <Form.Item className="col-span-2 flex justify-end">
                <Button
                  loading={loading}
                  size="small"
                  className="w-full px-8 lg:h-[48px] rounded-lg md:h-[36px] sm:h-[30px] bg-primary text-white"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div>
              <span className="flex justify-center items-center gap-x-2">
                <p className="font-manrope text-[16px]">
                  Already have an account?{" "}
                </p>
                <Link href={"/auth/login"} className="text-primary text-[16px]">
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
