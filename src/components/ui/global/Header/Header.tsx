"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import { landingPageRoutes } from "@/routes/routes";
import { getCookie } from "cookies-next";
import { getMe } from "@/services/users/user.service";
import { Avatar, Dropdown, Menu } from "antd";
import { IoIosNotifications } from "react-icons/io";
export const menu = ["Jobs", "Discover", "For job seekers", "For Employers"];
import { RxAvatar } from "react-icons/rx";
import { NotificationOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
const Header = () => {
  const navigation = useRouter();
  const menu = (
    <Menu className="w-auto text-center">
      <Menu.Item
        onClick={() => {
          navigation.push("/app/profile/" + userId);
        }}
        key="1"
      >
        Profile
      </Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
  const isLogin = getCookie("logged");
  const [login, setLogin] = useState<boolean>(false);

  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    setLogin(isLogin ? true : false);
    if (isLogin) {
      const jwtToken = getCookie("access_token");
      getMe(jwtToken as string).then((data) => {
        setUserId(data.data._id);
      });
    }
  }, [isLogin]);

  return (
    <>
      <header className={`w-full bg-white hidden lg:block`}>
        <div className="max-w-[80%] mx-auto  sm:px-6">
          <div className="flex items-center justify-between h-15 md:h-20">
            {/* Site Logo */}
            <Link href={"/"} className="hover:cursor-pointer">
              <Image
                className="mr-4"
                src="/logo.png"
                alt="Phalano Job"
                width={80}
                height={20}
              />
            </Link>

            <ul className="flex justify-end flex-wrap items-center space-x-12">
              {/* Desktop navigation menu Items */}
              {landingPageRoutes.map((menuItem, index) => {
                return (
                  <Link
                    href={menuItem.href}
                    key={index}
                    className="font-manrope font-semibold text-[14px] flex justify-center  items-center  py-3"
                  >
                    {menuItem.name}
                  </Link>
                );
              })}
            </ul>
            {/* Desktop Register/Login Links */}
            {login ? (
              <div className="ml-6 flex justify-between items-center gap-5">
                <Link href={"/dashboard/job-seeker"}>
                  <IoIosNotifications size={30} />
                  {/* <Avatar className="bg-primary">{username}</Avatar> */}
                </Link>
                <Dropdown overlay={menu} trigger={["hover"]}>
                  <div>
                    <RxAvatar size={40} />
                  </div>
                </Dropdown>
              </div>
            ) : (
              <ul className="ml-12 flex justify-between items-center gap-5">
                <li>
                  <Link
                    href="/auth/job-seeker/login"
                    className=" font-manrope font-semibold text-[16px] text-primary flex justify-center h-[40px] items-center rounded-3xl border-[1px] border-primary bg-[#E0E9F6] px-6 py-3 "
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/job-seeker/register"
                    className=" font-manrope font-semibold text-[16px] text-white flex justify-center h-[40px] items-center rounded-3xl bg-primary px-6 py-3 "
                  >
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
      <MobileHeader isLogin={login} />
    </>
  );
};

export default Header;
