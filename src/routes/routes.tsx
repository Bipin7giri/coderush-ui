import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { BiListCheck, BiSolidDashboard } from "react-icons/bi";
import { IoBagAddOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
export interface RoutesIF {
  name: string;
  href: string;
  icons?: any;
  isClickAble: boolean;
}
const employerDashboardRoutes: RoutesIF[] = [
  {
    name: "Dashboard",
    href: "/dashboard/employer",
    icons: <BiSolidDashboard />,
    isClickAble: false,
  },
  {
    name: "Posted Jobs",
    href: "/dashboard/employer/posted-jobs",
    icons: <PiSuitcaseSimpleThin />,
    isClickAble: false,
  },
  {
    name: "Job Listing",
    href: "/dashboard/employer/job-listing",
    icons: <BiListCheck />,
    isClickAble: false,
  },
  {
    name: "Applicants",
    href: "/dashboard/employer/applicants",
    icons: <IoBagAddOutline />,
    isClickAble: false,
  },
];
// posted-jobs
export const jobSeekerRoutes: RoutesIF[] = [
  {
    name: "Dashboard",
    href: "/dashboard/job-seeker",
    icons: <BiSolidDashboard />,
    isClickAble: false,
  },
  {
    name: "Jobs",
    href: "/dashboard/job-seeker/jobs",
    icons: <BiListCheck />,
    isClickAble: false,
  },
  {
    name: "My Profile",
    href: "/dashboard/job-seeker/profile",
    icons: <RxAvatar />,
    isClickAble: false,
  },
  {
    name: "Setting",
    href: "/dashboard/job-seeker/setting",
    icons: <AiOutlineSetting />,
    isClickAble: false,
  },
  {
    name: "Logout",
    href: "/",
    icons: <AiOutlineLogout />,
    isClickAble: true,
  },
];
export const landingPageRoutes: RoutesIF[] = [
  {
    name: "Dashboard",
    href: "/dashboard/job-seeker/jobs",
    icons: <BiListCheck />,
    isClickAble: false,
  },
  {
    name: "Prepare",
    href: "/app/prepare",
    // icons: <BiSolidDashboard />,
    isClickAble: false,
  },
  {
    name: "Coding Challenges",
    href: "/app/challenges",
    // icons: <PiSuitcaseSimpleThin />,
    isClickAble: false,
  },
];

export default employerDashboardRoutes;
