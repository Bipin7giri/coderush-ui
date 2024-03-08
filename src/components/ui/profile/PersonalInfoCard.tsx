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
    <div className="p-4 mt-8 bg-background rounded-2xl border-primary border-2">
      <div className="flex justify-between gap-2 items-center">
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
          <p className="text-gray-400 text-[14px]">{email}</p>
        </div>
        <div className="flex items-center gap-4 py-2">
          <span>
            <PhoneOutlined />
          </span>
          <p className="text-gray-400 text-[14px]">{phoneNumber}</p>
        </div>

        <div className="flex items-center gap-4 py-2">
          <span>
            <HiLocationMarker />
          </span>
          <p className="text-gray-400 text-[14px]">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
