import React from "react";

const HorizontalLinesMeter = ({
  difficulty,
  percentage,
}: {
  difficulty: string;
  percentage: number;
}) => {
  return (
    <div className="flex items-center">
      <div className="w-[250px] h-2 bg-gray-300 rounded-full mr-2 relative">
        <div
          className={`h-full rounded-full bg-primary`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-sm font-semibold">
        {difficulty} - {percentage}%
      </div>
    </div>
  );
};

export default HorizontalLinesMeter;
