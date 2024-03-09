"use client";
import { WorkExperienceIF } from "@/interface/user.interface";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
interface WorkExperienceInterface {
  loading?: boolean;
  workExperience?: WorkExperienceIF[];
  handleWorkExperience?: (workExperience: WorkExperienceIF) => void;
}
const WorkExperienceForm = ({
  workExperience,
  loading,
  handleWorkExperience,
}: WorkExperienceInterface) => {
  const handleFinish = (workExperience: WorkExperienceIF) => {};
  return (
    <div>
      <Form
        onFinish={handleWorkExperience}
        layout="vertical"
        className="grid grid-cols-2 gap-2"
      >
        <Form.Item
          label="Company Name"
          name="companyName"
          className="font-manrope font-semibold text-[13px] col-span-1"
          rules={[
            {
              required: true,
              message: "Please enter your full Company Name!",
            },
          ]}
        >
          <Input placeholder="Company Name" className="py-2" />
        </Form.Item>

        <Form.Item
          label="Position"
          name="position"
          className="font-manrope font-semibold text-[13px] col-span-1"
          rules={[{ required: true, message: "Please enter your position" }]}
        >
          <Input placeholder="Position" type="text" className="py-2" />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          className="font-manrope font-semibold col-span-2 text-[13px]"
          rules={[
            { required: true, message: "Please enter your description!" },
          ]}
        >
          <TextArea
            placeholder="description"
            className="py-2 font-manrope font-semibold text-[13px]"
          />
        </Form.Item>

        <Form.Item
          label="Start Date"
          name="startDate"
          className="font-manrope font-semibold text-[13px]"
          rules={[{ required: true, message: "Please enter your StartDate!" }]}
        >
          <Input
            placeholder="startDate"
            type="date"
            className="py-2 font-manrope font-semibold text-[13px]"
          />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="endDate"
          className="font-manrope font-semibold text-[13px]"
          rules={[{ required: true, message: "Please enter your EndDate!" }]}
        >
          <Input
            placeholder="EndDate"
            type="date"
            className="py-2 font-manrope font-semibold text-[13px]"
          />
        </Form.Item>

        <Form.Item className="col-span-2 flex justify-end">
          <Button
            loading={loading}
            size="large"
            className="w-full   rounded-lg  bg-primary text-white"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default WorkExperienceForm;
