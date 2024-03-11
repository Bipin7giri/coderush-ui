import { EditFilled, PhoneOutlined } from "@ant-design/icons";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
interface PersonalInfoCardIF {
  email: string;
  phoneNumber: string;
  location: string;
}
const PersonalInfoCard = ({
  email,
  phoneNumber,
  location,
}: PersonalInfoCardIF) => {
  return (
    <div className="bg-background mt-8 rounded-2xl p-4 drop-shadow-sm ">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-primary  text-2xl font-semibold">
          Personal Information
        </h1>
        <div>
          <EditFilled />
        </div>
      </div>
      <div className="pt-2">
        <div className="flex items-center gap-4 py-2">
          <span>
            <MdEmail />
          </span>
          <p className="text-[14px] text-gray-400">{email}</p>
        </div>
        <div className="flex items-center gap-4 py-2">
          <span>
            <PhoneOutlined />
          </span>
          <p className="text-[14px] text-gray-400">{phoneNumber}</p>
        </div>

        <div className="flex items-center gap-4 py-2">
          <span>
            <HiLocationMarker />
          </span>
          <p className="text-[14px] text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
