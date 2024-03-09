"use client";
import { EducationIF, UserIF } from "@/interface/user.interface";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import React, { useState } from "react";
import { IoIosSchool } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { prod_base_url } from "@/constants/baseurl";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { Button, Modal, notification } from "antd";
import EducationForm from "./forms/EducationForm";

interface EducationInterface {
  education: EducationIF[];
}
const Education = ({ education }: EducationInterface) => {
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

  const handleAddEducation = async (education: EducationIF) => {
    const token = getCookie("access_token");

    try {
      const response = await fetch(prod_base_url + "/education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(education),
      });
      console.log(response);
      handleCancel();
      notification.success({
        message: "Education Added Successfully!",
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
        <IoBookSharp className="text-2xl" />
        <h1 className="text-primary  text-2xl font-semibold">Educations</h1>
      </div>

      {education?.map((item, id) => {
        return (
          <div key={id} className=" pt-4">
            <div className="flex justify-between gap-2 items-center">
              <div className="flex justify-center gap-2 items-center">
                <IoIosSchool className="text-2xl" />
                <div>
                  <h3 className="text-md text-primary">{item.degreeName}</h3>
                  <div className="text-sm flex items-center gap-2 text-gray-400">
                    <h4>{item.universityName}</h4>
                    <div className="flex justify-between items-center gap-2">
                      <p>
                        {item.startDate}-{item.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <EditFilled className="hover:cursor-pointer" />
                <DeleteFilled className="hover:cursor-pointer text-red-600" />
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
        title="Education"
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <EducationForm handleEducation={handleAddEducation} />
      </Modal>
    </div>
  );
};

export default Education;
