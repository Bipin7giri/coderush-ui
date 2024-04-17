import PrepareTopicCard from "@/components/ui/prepare/PrepareTopicCard";
import TrendingChallenges from "@/components/ui/prepare/TrendingChallanges";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-8">
      <div className="flex justify-between items-start gap-8">
        <PrepareTopicCard />
        <TrendingChallenges />
      </div>
    </div>
  );
};

export default page;
