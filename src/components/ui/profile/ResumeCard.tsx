import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const ResumeCard = () => {
  const files = [
    {
      fileName: "my resume",
      fileUrl: "https://www.dropbox.com/s/123456789/myresume.pdf?dl=0",
    },
  ];
  return (
    <div className=" p-4 mt-8 bg-background rounded-2xl drop-shadow-sm">
      <div className="">
        <h1 className="text-primary  text-2xl font-semibold">My Resume</h1>
      </div>
      <div className="flex justify-between items-center">
        {files.map((item) => {
          return (
            <Link
              className="underline text-blue-500"
              key={item.fileName}
              href={item.fileUrl}
            >
              {item.fileName}
            </Link>
          );
        })}
        <div className="flex justify-between items-center gap-4">
          <EditFilled />
          <DeleteFilled />
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
