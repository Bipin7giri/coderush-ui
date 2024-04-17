"use client";
import React from "react";
import ReactEcharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 10, name: "Easy", itemStyle: { color: "green" } },
          { value: 20, name: "Medium", itemStyle: { color: "yellow" } },
          { value: 30, name: "Hard", itemStyle: { color: "red" } },
        ],
      },
    ],
  };
  return (
    <div className="w-full p-8">
      <ReactEcharts style={{ height: "350px" }} option={option} />
    </div>
  );
};

export default PieChart;
