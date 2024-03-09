"use client";
import { EducationIF, WorkExperienceIF } from "@/interface/user.interface";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
interface EducationInterface {
  loading?: boolean;
  education?: EducationIF[];
  handleEducation?: (education: EducationIF) => void;
}
const EducationForm = ({
  education,
  loading,
  handleEducation,
}: EducationInterface) => {
  return (
    <div>
      <Form
        onFinish={handleEducation}
        layout="vertical"
        className="grid grid-cols-2 gap-2"
      >
        <Form.Item
          label="University Name"
          name="universityName"
          className="font-manrope font-semibold text-[13px] col-span-1"
          rules={[
            {
              required: true,
              message: "Please enter your full University Name!",
            },
          ]}
        >
          <Input placeholder="University Name" className="py-2" />
        </Form.Item>

        <Form.Item
          label="Degree Name"
          name="degreeName"
          className="font-manrope font-semibold text-[13px] col-span-1"
          rules={[{ required: true, message: "Please enter your degreeName" }]}
        >
          <Input placeholder="Degree Name" type="text" className="py-2" />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          className="font-manrope font-semibold text-[13px]"
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
            type="date"
            placeholder="startDate"
            className="py-2 font-manrope font-semibold text-[13px]"
          />
        </Form.Item>

        <Form.Item
          label="End Date"
          name="endDate"
          className="font-manrope font-semibold text-[13px]"
          rules={[{ required: true, message: "Please enter your End Date!" }]}
        >
          <Input
            type="date"
            placeholder="endDate"
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

export default EducationForm;
