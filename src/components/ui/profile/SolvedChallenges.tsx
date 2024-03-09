"use client";
import dynamic from "next/dynamic";
import React from "react";
import HorizontalLinesMeter from "../charts/HorizontalLinesMeter";
import Image from "next/image";
const PieChart = dynamic(
  () => import("@/components/ui/charts/PieChart").then((e) => e.default),
  {
    ssr: false,
  }
);

const SolvedChallenges = () => {
  return (
    <div className=" p-4 mt-8 bg-background rounded-2xl drop-shadow-sm">
      <div className="">
        <h1 className="text-primary  text-2xl font-semibold">
          Difficulty Status
        </h1>
      </div>
      <HorizontalLinesMeter difficulty="easy" percentage={50} />
      <HorizontalLinesMeter difficulty="medium" percentage={20} />
      <HorizontalLinesMeter difficulty="hard" percentage={22} />
    </div>
  );
};

export default SolvedChallenges;
