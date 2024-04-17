import React from "react";
import { Tag } from "antd";
import dynamic from "next/dynamic";

const completedChallenges = [
  {
    id: 1,
    difficultyLevel: "easy",
    title: "Find the sum of two array",
    description: "Completed Challange 1 Description",
    tags: ["React", "Typescript", "Redux"],
    completed: true,
    programmingLanguage: "JavaScript",
    submittedOn: "2024-2-1",
  },
  {
    id: 1,
    difficultyLevel: "easy",
    title: "Find the sum of two array",
    description: "Completed Challange 1 Description",
    tags: ["React", "Typescript", "Redux"],
    completed: true,
    programmingLanguage: "JavaScript",
    submittedOn: "2024-2-1",
  },
  {
    id: 2,
    difficultyLevel: "medium",
    title: "Implement a Binary Search Tree",
    description: "Completed Challenge 2 Description",
    tags: ["Data Structures", "Algorithms", "Java"],
    completed: true,
    programmingLanguage: "TypeScript",
    submittedOn: "2024-3-5",
  },
  {
    id: 2,
    difficultyLevel: "medium",
    title: "Implement a Binary Search Tree",
    description: "Completed Challenge 2 Description",
    tags: ["Data Structures", "Algorithms", "Java"],
    completed: true,
    programmingLanguage: "TypeScript",
    submittedOn: "2024-3-5",
  },
  {
    id: 3,
    difficultyLevel: "hard",
    title: "Implement a Graph Traversal Algorithm",
    description: "Completed Challenge 3 Description",
    tags: ["Graphs", "Algorithms", "Python"],
    completed: true,
    programmingLanguage: "JavaScript",

    submittedOn: "2024-3-8",
  },
  {
    id: 4,
    difficultyLevel: "medium",
    title: "Implement Merge Sort",
    description: "Completed Challenge 4 Description",
    tags: ["Algorithms", "Sorting", "C++"],
    completed: true,
    submittedOn: "2024-3-8",
    programmingLanguage: "JavaScript",
  },
];
const getDifficultyColor = (difficultyLevel: string) => {
  const mapping: Record<string, string> = {
    easy: "bg-green-500",
    medium: "bg-yellow-500",
    hard: "bg-red-500",
  };
  return mapping[difficultyLevel];
};

const CompleteChallengesCard = () => {
  return (
    <div className="p-4 bg-background w-full rounded-2xl  drop-shadow-sm">
      <div className="flex justify-between gap-2 items-center">
        <h1 className="text-primary  text-2xl font-semibold">
          Complete Challenges
        </h1>
      </div>
      <div className="pt-2">
        {completedChallenges.map((challenge) => {
          return (
            <div
              className="flex items-center justify-between gap-4 py-2 border-b border-gray-200"
              key={challenge.id}
            >
              <span className="flex justify-center items-center gap-x-2">
                <Tag
                  suppressHydrationWarning
                  suppressContentEditableWarning
                  className={`bg-black text-white px-2`}
                >
                  {challenge.difficultyLevel}
                </Tag>
              </span>

              <div className="w-[190px] h-auto">
                <p className=" text-start text-gray-700 font-bold text-[16px]">
                  {challenge.title}
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-start text-[14px]">
                  {challenge.submittedOn}
                </p>
              </div>

              <span className="flex justify-center items-center gap-x-2">
                <Tag
                  suppressHydrationWarning
                  suppressContentEditableWarning
                  className={`bg-black text-white px-2`}
                >
                  {challenge.programmingLanguage}
                </Tag>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompleteChallengesCard;
