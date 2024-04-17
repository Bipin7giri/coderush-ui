import { Button, Tag } from "antd";
import React from "react";

const PrepareTopicCard = () => {
  return (
    <div className="p-4 bg-background w-[40%] rounded-2xl border-2 border-gray-200">
      <h1 className="text-primary  text-2xl font-semibold">
        Continue Where you left
      </h1>
      <div className="pt-4">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-400 text-xl">Getting the sum of array</h1>
          <div className="flex items-center gap-4">
            <Tag className="bg-green-400 text-primary-4">Easy</Tag>
            <Tag className="bg-yellow-500 text-primary-4">JavaScript</Tag>
          </div>
        </div>
        <div className="pt-2 flex justify-end">
          <Button size="large" className="bg-primary text-white">
            Get Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrepareTopicCard;
