"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
const MobileHeader = ({ isLogin }: { isLogin: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:hidden block bg-background ">
      <div className="flex items-center sm:gap-[13.25rem] gap-0 justify-between flex-wrap px-6 py-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <Link href="/" className="flex items-center gap-[10px]">
            {/* <img src={Logo} alt="Logo" /> */}
            <Image
              src={"/image/newlogo.png"}
              height={24}
              width={24}
              alt="logo"
            />
            <div>
              <h1 className="text-primary leading-both uppercase font-manrope font-extrabold text-capitalize text-[12px]">
                PHALANO
              </h1>
              <p className="text-primary leading-both capitalize font-normal text-[10px]">
                JOB
              </p>
            </div>
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3  rounded text-black-500 hover:text-black-400"
          >
            {isLogin ? (
              <RxAvatar className="text-3xl" />
            ) : (
              <>
                <svg
                  className={`${isOpen ? "hidden" : "block"}`}
                  width="26"
                  height="26"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="26" height="22" rx="2" fill="#F5F5F5" />
                  <rect
                    x="0.25"
                    y="0.75"
                    width="25.5"
                    height="21.5"
                    rx="1.75"
                    stroke="black"
                    strokeOpacity="0.1"
                    strokeWidth="0.5"
                  />
                  <g clipPath="url(#clip0_778_9236)">
                    <path
                      d="M21.25 10.75H4.75C4.33579 10.75 4 11.0858 4 11.5C4 11.9142 4.33579 12.25 4.75 12.25H21.25C21.6642 12.25 22 11.9142 22 11.5C22 11.0858 21.6642 10.75 21.25 10.75Z"
                      fill="#374957"
                    />
                    <path
                      d="M21.25 5.5H4.75C4.33579 5.5 4 5.83579 4 6.25C4 6.66421 4.33579 7 4.75 7H21.25C21.6642 7 22 6.66421 22 6.25C22 5.83579 21.6642 5.5 21.25 5.5Z"
                      fill="#374957"
                    />
                    <path
                      d="M21.25 16H4.75C4.33579 16 4 16.3358 4 16.75C4 17.1642 4.33579 17.5 4.75 17.5H21.25C21.6642 17.5 22 17.1642 22 16.75C22 16.3358 21.6642 16 21.25 16Z"
                      fill="#374957"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_778_9236">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(4 2.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  className={`fill-current h-3 w-3 ${
                    isOpen ? "block" : "hidden"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </>
            )}
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center gap-[16px] py-4 lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {isLogin ? (
            <div className="sm:text-[18px] sm:text-start text-center font-bold  text-[16px] lg:flex-grow">
              <Link
                href="/dashboard/job-seeker"
                className="block mt-4 lg:inline-block lg:mt-0 sm:ml-12 text-[#4D4D4D]"
              >
                Dashboard
              </Link>
              <Link
                href="/blogs"
                className="block mt-4 lg:inline-block lg:mt-0 sm:ml-12 text-[#4D4D4D]"
              >
                Discover
              </Link>
              <Link
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 sm:ml-12 text-[#4D4D4D]"
              >
                For job seekers
              </Link>
              <Link
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-white-200 sm:ml-12"
              >
                For employers
              </Link>
            </div>
          ) : (
            <>
              <div className="sm:text-[18px] sm:text-start text-center font-bold  text-[16px] lg:flex-grow">
                <Link
                  href="#"
                  className="block mt-4 lg:inline-block lg:mt-0 sm:ml-12 text-[#4D4D4D]"
                >
                  Jobs
                </Link>
                <a
                  href="/blogs"
                  className="block mt-4 lg:inline-block lg:mt-0 sm:ml-12 text-[#4D4D4D]"
                >
                  Discover
                </a>
                <a
                  href="#"
                  className="block mt-4 lg:inline-block lg:mt-0 sm:ml-12 text-[#4D4D4D]"
                >
                  For job seekers
                </a>
                <a
                  href="#"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 sm:ml-12"
                >
                  For employers
                </a>
              </div>
              <div className="flex justify-center mt-6 items-center gap-[24px]">
                <Link
                  href="/auth/job-seeker/login"
                  className=" font-manrope font-semibold text-[16px] text-primary flex justify-center h-[40px] items-center rounded-3xl border-[1px] border-primary bg-[#E0E9F6] px-6 py-3 "
                >
                  Login
                </Link>
                <Link
                  className=" font-manrope font-semibold text-[16px] text-white flex justify-center h-[40px] items-center rounded-3xl bg-primary px-6 py-3 "
                  href="/auth/job-seeker/register"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileHeader;
