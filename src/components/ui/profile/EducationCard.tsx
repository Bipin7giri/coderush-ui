import { EditFilled } from "@ant-design/icons";
import React from "react";
import { IoIosSchool } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
const educations = [
  {
    universityName: "Stanford University",
    startDate: "2016-09-01",
    endDate: "2020-06-01",
    degreeName: "Bachelor of Science in Computer Science",
  },
  {
    universityName: "Massachusetts Institute of Technology (MIT)",
    startDate: "2020-09-01",
    endDate: "2022-06-01",
    degreeName: "Master of Science in Electrical Engineering",
  },
  {
    universityName: "Harvard University",
    startDate: "2022-09-01",
    endDate: "2024-06-01",
    degreeName: "Ph.D. in Artificial Intelligence",
  },
];

const Education = () => {
  return (
    <div className=" p-8 mt-8 bg-background rounded-2xl drop-shadow-sm">
      <div className="flex items-center gap-2">
        <IoBookSharp className="text-2xl" />
        <h1 className="text-primary  text-2xl font-semibold">Educations</h1>
      </div>

      {educations.map((item, id) => {
        return (
          <div key={id} className=" pt-4">
            <div className="flex justify-between gap-2 items-center">
              <div className="flex justify-center gap-2 items-center">
                <IoIosSchool className="text-2xl" />
                <div>
                  <h3 className="text-md text-primary">{item.degreeName}</h3>
                  <div className="text-sm flex items-center gap-2 text-gray-400">
                    <h4>{item.universityName}</h4>
                    <div className="flex justify-between items-center gap-2">
                      <p>
                        {item.startDate}-{item.endDate}
                      </p>
                    </div>
                  </div>
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

export default Education;
