import { Avatar } from "antd";
import React from "react";
interface AvatarCardIF {
  avatar: string;
  fullName: string;
}
const AvatarCard = ({ avatar, fullName }: AvatarCardIF) => {
  return (
    <div className="flex justify-between items-center">
      <Avatar src={avatar} />
    </div>
  );
};

export default AvatarCard;
