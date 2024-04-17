import { EditFilled } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
interface AvatarCardIF {
  avatar: string;
  fullName: string;
  username: string;
  position: string;
}
const AvatarCard = ({ avatar, fullName, username, position }: AvatarCardIF) => {
  return (
    <div className="p-4 bg-background rounded-2xl drop-shadow-sm">
      <div className="flex justify-between gap-2 items-center">
        <Avatar className="w-[80px] h-[80px]" src={avatar} />
        <div>
          <EditFilled />
        </div>
      </div>
      <div className="pt-2">
        <h1 className="leading-2  text-primary text-3xl">{fullName}</h1>
        <h1 className="leading-2 text-gray-500 text-2xl">@{username}</h1>
        <h1 className="leading-2 text-gray-500 pt-2 text-xl">{position}</h1>
      </div>
    </div>
  );
};

export default AvatarCard;
