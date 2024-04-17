"use client";
import { dev_base_url } from "@/constants/baseurl";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { setCookie, getCookie } from "cookies-next";
interface LoginFormIF {
  email: string;
  password: string;
}
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigation = useRouter();
  const onFinish = async (values: LoginFormIF) => {
    setLoading(true);
    try {
      const response = await fetch(dev_base_url + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        const data = await response.json();
        setCookie("logged", "true");
        setCookie("access_token", data?.access_token);
        navigation.push("/app");
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
        <div className="bg-background w-[450px] p-12 h-auto border-2 border-gray-200  rounded-xl border-solid">
          <h1 className="lg:text-[24px] text-primary md:text-[16px] sm:[14px] font-manrope font-extrabold text-[24px]">
            Welcome Back!
          </h1>
          <p className="text-[#A0AEC0]">Please login using your credentials.</p>
          {/*social media*/}
          <div className="flex justify-around items-center lg:gap-x-4 md:gap-x-3 sm:gap-x-2  mt-5"></div>

          <div className="mt-5 w-full">
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Email"
                name="email"
                className="font-manrope font-semibold text-[13px]"
                rules={[
                  { required: true, message: "Please enter your email!" },
                ]}
              >
                <Input
                  placeholder="Input placeholder"
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
                  placeholder="Input placeholder"
                  className="py-2"
                />
              </Form.Item>
              <Form.Item>
                <div className="flex justify-between items-center mt-4">
                  <Form.Item name="rememberMe" valuePropName="checked" noStyle>
                    <Checkbox>Remember Me</Checkbox>
                  </Form.Item>
                  <Link href={`/ `} className="text-primary hover:underline">
                    Forgot Password?
                  </Link>
                </div>
              </Form.Item>
              <Form.Item>
                <Button
                  loading={loading}
                  className="w-full lg:h-[48px] md:h-[36px] sm:h-[30px] bg-primary text-white"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <div>
              <span className="flex justify-center items-center gap-x-2">
                <p className="font-manrope text-[16px]">
                  Don’t have an account?{" "}
                </p>
                <Link
                  href={"/auth/register"}
                  className="text-primary text-[16px]"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
