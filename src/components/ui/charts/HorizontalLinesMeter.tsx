import React from "react";

const HorizontalLinesMeter = ({
  difficulty,
  percentage,
}: {
  difficulty: string;
  percentage: number;
}) => {
  let meterColorClass = "";

  switch (difficulty) {
    case "easy":
      meterColorClass = "bg-green-400";
      break;
    case "medium":
      meterColorClass = "bg-yellow-400";
      break;
    case "hard":
      meterColorClass = "bg-red-400";
      break;
    default:
      meterColorClass = "bg-gray-400";
  }

  return (
    <div className="flex items-center">
      <div className="w-20 h-2 bg-gray-300 rounded-full mr-2 relative">
        <div
          className={`h-full rounded-full ${meterColorClass}`}
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
