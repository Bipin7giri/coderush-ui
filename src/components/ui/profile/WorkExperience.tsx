import { EditFilled } from "@ant-design/icons";
import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
const workExperience = [
  {
    companyName: "Google",
    startDate: "2020-01-01",
    endDate: "2021-01-01",
    position: "Front-End Developer",
    description: "I worked as a backend developer",
  },
  {
    companyName: "Microsoft",
    startDate: "2021-02-01",
    endDate: "2022-02-01",
    position: "Full-Stack Developer",
    description: "Developed web applications using various technologies.",
  },
  {
    companyName: "Amazon",
    startDate: "2022-03-01",
    endDate: "2023-03-01",
    position: "Software Engineer",
    description:
      "Worked on scalable backend systems for e-commerce applications.",
  },
  {
    companyName: "Facebook",
    startDate: "2023-04-01",
    endDate: "2024-04-01",
    position: "Senior Software Engineer",
    description:
      "Led a team in developing new features for social networking platform.",
  },
];

const WorkExperience = () => {
  return (
    <div className=" p-8 mt-8 bg-background rounded-2xl drop-shadow-sm">
      <div className="flex items-center gap-2">
        <MdOutlineWorkOutline className="text-2xl" />
        <h1 className="text-primary  text-2xl font-semibold">
          Work Experience
        </h1>
      </div>

      {workExperience.map((item, id) => {
        return (
          <div key={id} className=" pt-4">
            <div className="flex justify-between gap-2 items-center">
              <div className="flex justify-center gap-2 items-center">
                <FaBuilding className="text-2xl" />
                <div>
                  <h3 className="text-md text-primary">{item.position}</h3>
                  <div className="text-sm flex items-center gap-2 text-gray-400">
                    <h4>{item.companyName}</h4>
                    <div className="flex justify-between items-center gap-2">
                      <p>
                        {item.startDate}-{item.endDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
              <div>
                <EditFilled />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
