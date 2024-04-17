import ChallengesTypesCard from "@/components/ui/challenges/ChallengesTypesCard";
import TrendingChallengesTypesCard from "@/components/ui/challenges/TrendingChallengesTypesCard";
import TrendingChallenges from "@/components/ui/prepare/TrendingChallanges";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto mt-8 max-w-[1920px]">
      <ChallengesTypesCard />
      <TrendingChallengesTypesCard />
    </div>
  );
};

export default page;
