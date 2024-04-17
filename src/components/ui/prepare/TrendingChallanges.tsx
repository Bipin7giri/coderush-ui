import React from "react";
import { Button, Tag } from "antd";
import dynamic from "next/dynamic";
import { QuestionIF } from "@/app/app/challenges/fastest-finger/page";

const trendingChallenges = [
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

interface TrendingChallengesIF {
  showModal?: (questionId: string) => void;
  questions?: QuestionIF[];
}
const TrendingChallenges = ({ showModal, questions }: TrendingChallengesIF) => {
  return (
    <div className="bg-background w-full rounded-2xl p-4  drop-shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-primary  text-2xl font-semibold">
          Trending Challenges
        </h1>
      </div>
      <div className="pt-2">
        {questions?.map((challenge) => {
          return (
            <div
              className="flex items-center justify-between gap-4 border-b border-gray-200 py-2"
              key={challenge._id}
            >
              <span className="flex items-center justify-center gap-x-2">
                <Tag
                  suppressHydrationWarning
                  suppressContentEditableWarning
                  className={`${getDifficultyColor(
                    challenge.difficulty,
                  )} px-2 text-white`}
                >
                  {challenge.difficulty}
                </Tag>
              </span>

              <div className="h-auto w-[190px]">
                <p className=" text-start text-[16px] font-bold text-gray-700">
                  {challenge.title}
                </p>
              </div>

              {/* <div className="h-auto w-[190px]">
                <Tag className=" text-start text-[16px] font-bold text-gray-700">
                  solved by {40}
                </Tag>
              </div> */}

              {challenge.tags.map((item, id) => {
                return (
                  <>
                    <span
                      key={id}
                      className="flex items-center justify-center gap-x-2"
                    >
                      <Tag
                        suppressHydrationWarning
                        suppressContentEditableWarning
                      >
                        {item}
                      </Tag>
                    </span>
                  </>
                );
              })}

              <span className="flex items-center justify-center gap-x-2">
                <Button
                  onClick={() => {
                    showModal && showModal(challenge._id);
                  }}
                  suppressHydrationWarning
                  suppressContentEditableWarning
                  className={`bg-black px-2 text-white`}
                >
                  Compete
                </Button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingChallenges;
