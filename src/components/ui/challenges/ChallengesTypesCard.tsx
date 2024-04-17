import Link from "next/link";
import React from "react";
import {
  BiBall,
  BiBug,
  BiCodeAlt,
  BiCodeBlock,
  BiCodeCurly,
  BiCommentDetail,
  BiCube,
  BiDollarCircle,
  BiGroup,
  BiRocket,
  BiTrophy,
} from "react-icons/bi";
import { BsFillDatabaseFill } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";

const ChallengesTypesCard = () => {
  const challengesData = [
    {
      title: "Challenge with friend",
      description: "Compete with your friend for fastest finger round",
      icon: <CiTimer className="text-2xl text-primary" />, // Dynamic icon
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Solo Time Trial",
      description: "Complete the challenge within the shortest time possible",
      icon: <BiTrophy className="text-2xl text-primary" />, // Dynamic icon
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Earn Money Challenge",
      description: "Participate and win cash prizes",
      icon: <BiDollarCircle className="text-2xl text-primary" />, // Dynamic icon
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Algorithm Challenge",
      description:
        "Solve a series of algorithmic problems to test your coding skills",
      icon: <BiCodeAlt className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Code Review Challenge",
      description:
        "Review and provide feedback on code snippets provided by others",
      icon: <BiCommentDetail className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Code Golf Challenge",
      description:
        "Write code to solve a problem in as few characters as possible",
      icon: <BiBall className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Hackathon Challenge",
      description:
        "Participate in a coding marathon to build a project within a limited time",
      icon: <BiRocket className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Pair Programming Challenge",
      description:
        "Collaborate with a partner to solve coding problems together",
      icon: <BiGroup className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Bug Fixing Challenge",
      description: "Identify and fix bugs in provided code snippets",
      icon: <BiBug className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Refactoring Challenge",
      description:
        "Refactor existing code to improve its readability and performance",
      icon: <BiCodeCurly className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Data Structures Challenge",
      description:
        "Implement various data structures and solve related problems",
      icon: <BiCube className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Web Development Challenge",
      description: "Build a web application based on given requirements",
      icon: <BiCodeBlock className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
    {
      title: "Database Design Challenge",
      description:
        "Design database schemas and optimize queries for performance",
      icon: <BsFillDatabaseFill className="text-2xl text-primary" />,
      link: "/app/challenges/fastest-finger",
    },
  ];
  return (
    <div className=" mt-8 w-[80%] mx-auto rounded-3xl p-4 bg-background">
      <h1 className="text-primary  text-3xl font-semibold tracking-wide px-4">
        Challenges
      </h1>
      <div className="grid grid-cols-3 gap-4 p-4 flex-wrap">
        {challengesData.map((item, id) => {
          return (
            <>
              <Link
                href={item?.link}
                key={id}
                className="border-2 border-gray-300 flex  rounded-2xl  gap-4 p-4 item-center justify-between hover:cursor-pointer  hover:shadow-md"
              >
                <div className="pt-6">{item.icon}</div>
                <div>
                  <h1 className="text-lg tracking-wide font-bold text-primary">
                    {item.title}
                  </h1>
                  <p className="text-[14px] tracking-wide font-sans">
                    {item.description}
                  </p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ChallengesTypesCard;
