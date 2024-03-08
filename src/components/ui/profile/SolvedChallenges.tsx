"use client";
import dynamic from "next/dynamic";
import React from "react";
import HorizontalLinesMeter from "../charts/HorizontalLinesMeter";
const PieChart = dynamic(
  () => import("@/components/ui/charts/PieChart").then((e) => e.default),
  {
    ssr: false,
  }
);

const SolvedChallenges = () => {
  return (
    <div className="p-12 bg-background rounded-2xl border-primary border-2">
      <div className="flex items-center">
        <div className="w-[70%] h-[300px]">
          <PieChart />
        </div>
        <div className="w-[30%]">
          <HorizontalLinesMeter difficulty="easy" percentage={50} />
          <HorizontalLinesMeter difficulty="medium" percentage={20} />
          <HorizontalLinesMeter difficulty="hard" percentage={22} />
        </div>
      </div>
    </div>
  );
};

export default SolvedChallenges;
