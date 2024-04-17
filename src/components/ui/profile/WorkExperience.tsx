"use client";
import { WorkExperienceIF } from "@/interface/user.interface";
import { EditFilled } from "@ant-design/icons";
import { Button, Modal, notification } from "antd";
import React, { useReducer, useState } from "react";
import { FaBuilding } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import { prod_base_url } from "@/constants/baseurl";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

interface WorkExperienceInterface {
  workExperience: WorkExperienceIF[];
}

const WorkExperience = ({ workExperience }: WorkExperienceInterface) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useRouter();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAddWorkExperience = async (workExperience: WorkExperienceIF) => {
    const token = getCookie("access_token");

    try {
      const response = await fetch(prod_base_url + "/work-experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(workExperience),
      });
      console.log(response);
      handleCancel();
      notification.success({
        message: "Work Experience Added Successfully!",
      });
      navigation.refresh();
      if (!response.ok) {
        console.log(response);
      }

      const responseData = await response.json();
      // Handle the response data if needed
      console.log(responseData);
    } catch (error) {
      handleCancel();
      console.error("Error adding work experience:", error);
    }
  };
  return (
    <div className=" p-8 mt-8 bg-background rounded-2xl drop-shadow-sm">
      <div className="flex items-center gap-2">
        <MdOutlineWorkOutline className="text-2xl" />
        <h1 className="text-primary  text-2xl font-semibold">
          Work Experience
        </h1>
      </div>

      {workExperience?.map((item, id) => {
        return (
          <div key={id} className=" pt-4">
            <div className="flex justify-between gap-2 items-center">
              <div className="flex justify-center gap-2 items-center">
                <FaBuilding className="text-2xl" />
                <div>
                  <h3 className="text-md text-primary">{item.position}</h3>
                  <div className="text-sm flex items-center gap-2 text-gray-400">
                    <h4>{item.companyName}</h4>
                    <div className="flex justify-between items-center gap-2">
                      <p>
                        {item.startDate}-{item.endDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
              <div>
                <EditFilled />
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex pt-4 justify-end items-center">
        <Button
          onClick={showModal}
          size="small"
          shape="default"
          className="bg-primary text-white"
        >
          Add More
        </Button>
      </div>

      <Modal
        title="Work Experience"
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <WorkExperienceForm handleWorkExperience={handleAddWorkExperience} />
      </Modal>
    </div>
  );
};

export default WorkExperience;
