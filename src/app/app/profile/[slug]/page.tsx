import AvatarCard from "@/components/ui/profile/AvatarCard";
import { UserIF } from "@/interface/user.interface";
import { getMe } from "@/services/users/user.service";
import { Avatar } from "antd";
import { cookies } from "next/headers";
export default async function page({ params }: any) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  console.log(token);
  const res = await getMe(token?.value as unknown as string);
  const data: UserIF = res.data;
  return (
    <>
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <div className="">
          {JSON.stringify(data)}
          {/* avatar */}
          <div className="flex justify-between items-center">
            <AvatarCard
              avatar={data.avatar as string}
              fullName={data.fullName}
            />
          </div>
        </div>
        <div>
          <h1>2</h1>
        </div>
      </div>
    </>
  );
}
