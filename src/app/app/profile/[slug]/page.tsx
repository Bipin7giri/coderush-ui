"use server";
import AvatarCard from "@/components/ui/profile/AvatarCard";
import CompleteChallengesCard from "@/components/ui/profile/CompleteChallengesCard";
import Education from "@/components/ui/profile/EducationCard";
import PersonalInfoCard from "@/components/ui/profile/PersonalInfoCard";
import ResumeCard from "@/components/ui/profile/ResumeCard";
import SolvedChallenges from "@/components/ui/profile/SolvedChallenges";
import WorkExperience from "@/components/ui/profile/WorkExperience";
import { prod_base_url } from "@/constants/baseurl";
import {
  EducationIF,
  UserIF,
  WorkExperienceIF,
} from "@/interface/user.interface";
import { getMe } from "@/services/users/user.service";
import { cookies } from "next/headers";
export default async function page({ params }: any) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  const res = await getMe(token?.value as unknown as string);
  const data: UserIF = res.data;

  return (
    <>
      <div className="mx-auto mt-8 max-w-[1280px]">
        <div className="flex flex-wrap  items-start justify-center gap-12">
          <div className="w-[30%]">
            <AvatarCard
              username={data.username}
              position={data?.position as string}
              avatar={data.avatar as string}
              fullName={data.fullName}
            />
            <SolvedChallenges />
            <PersonalInfoCard
              email={data.email}
              location={data?.location as string}
              phoneNumber={data?.phoneNumber as string}
            />
            <ResumeCard resume={data?.resume} />
          </div>

          <div className="w-[60%]">
            <div className="col-span-2">
              <CompleteChallengesCard />
              <WorkExperience workExperience={data?.workExperience} />
              <Education education={data?.education} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
