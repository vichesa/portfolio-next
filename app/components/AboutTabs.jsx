"use client";

import React, { useState, useTransition } from "react";

const tabs = [
  {
    tabActive: "skills",
    tabName: "Skills",
    content: (
      <ul className="list-disc pl-5 flex flex-cols-2">
        <div>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React Js</li>
          <li>Next Js</li>
          <li>Node Js</li>
        </div>
        <div className="ml-12">
          <li>Mongo DB</li>
          <li>GIT</li>
          <li>Material UI</li>
          <li>Ant Design</li>
          <li>Bootstrap</li>
        </div>
      </ul>
    ),
    // [
    //   "HTML + CSS",
    //   "JavaScript",
    //   "React Js",
    //   "Next Js",
    //   "Node Js",
    //   "Mongo DB",
    //   "GIT",
    //   "Material UI",
    //   "Tailwind",
    //   "Ant Design",
    //   "Bootstrap",
    // ],
  },
  {
    tabActive: "educations",
    tabName: "Educations",
    content: (
      <ul className="list-disc pl-5">
        <li>Bachelor Degree of Astronomy, Institut Teknologi Bandung</li>
        <li>Fullstact Web Development Bootcamp at dibimbing.id</li>
      </ul>
    ),

    // [
    //   "Bachelor Degree of Astronomy, Institut Teknologi Bandung",
    //   "Fullstact Web Development Bootcamp at dibimbing.id",
    // ],
  },
  {
    tabActive: "achievements",
    tabName: "Achievements",
    content: (
      <ul className="list-disc pl-5 ">
        <li>Deanlist of FMIPA ITB 2016</li>
        <li>The Rising Star of Astronomy ITB 2016</li>
        <li>
          Top 5 students of Fillstact Web Development Bootcamp Batch 1 at
          dibimbing.id
        </li>
      </ul>
    ),
    // [
    //   "Deanlist of FMIPA ITB 2016",
    //   "Top 5 students of Fillstact Web Development Bootcamp Batch 1 at dibimbing.id",
    // ],
  },
];

const AboutTabs = () => {
  const [tabActive, setTabActive] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabActive = (id) => {
    startTransition(() => {
      setTabActive(id);
    });
  };

  const tabContent = tabs.find((tab) => tabActive === tab.tabActive).content;

  return (
    <div>
      <div className="flex flex-row justify-start mt-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            tabActive={tabActive === tab.tabActive}
            onClick={() => handleTabActive(tab.tabActive)}
            className={`hover:text-white hover:border-b border-yellow-500 mr-4 ${
              tabActive === tab.tabActive
                ? "text-white border-b border-yellow-500"
                : ""
            }`}
          >
            {tab.tabName}
          </button>
          //   <TabButton
          //     key={index}
          //     tabActive={tabActive === tab.tabActive}
          //     handleTabActive={() => handleTabActive(tab.tabActive)}
          //     tabName={tab.tabName}
          //   />
        ))}
      </div>
      <div className="mt-4 text-[#ADB7BE]">
        {tabContent}
        {/* <ul className="list-disc pl-5">
          {tabContent.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default AboutTabs;
