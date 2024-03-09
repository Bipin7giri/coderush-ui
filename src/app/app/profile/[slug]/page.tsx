import AvatarCard from "@/components/ui/profile/AvatarCard";
import CompleteChallengesCard from "@/components/ui/profile/CompleteChallengesCard";
import Education from "@/components/ui/profile/EducationCard";
import PersonalInfoCard from "@/components/ui/profile/PersonalInfoCard";
import ResumeCard from "@/components/ui/profile/ResumeCard";
import SolvedChallenges from "@/components/ui/profile/SolvedChallenges";
import WorkExperience from "@/components/ui/profile/WorkExperience";
import { UserIF } from "@/interface/user.interface";
import { getMe } from "@/services/users/user.service";
import { cookies } from "next/headers";
export default async function page({ params }: any) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  console.log(token);
  const res = await getMe(token?.value as unknown as string);
  const data: UserIF = res.data;
  return (
    <>
      <div className="max-w-[1280px] mt-8 mx-auto">
        <div className="flex flex-wrap  justify-center gap-12 items-start">
          <div className="w-[30%]">
            {/* avatar */}
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
            <ResumeCard />
          </div>

          <div className="w-[60%]">
            <div className="col-span-2">
              <CompleteChallengesCard />
              <WorkExperience />
              <Education />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
