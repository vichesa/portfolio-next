"use client";
import React from "react";

const ProjectTab = ({ name, activeTag, handleProjectTab }) => {
  const buttonClasses = activeTag
    ? "text-white border border-white"
    : "text-[#ADB7BE] border-[#ADB7BE]";
  return (
    <button
      className={`px-2 py-1 rounded-2xl border border-[#ADB7BE] hover:text-white hover:border-white ${buttonClasses}`}
      onClick={handleProjectTab}
    >
      {name}
    </button>
  );
};

export default ProjectTab;
