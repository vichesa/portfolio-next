import Link from "next/link";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCards = ({ imageUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 rounded-t-xl relative group"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute gap-2 w-full h-full hidden group-hover:flex items-center justify-center left-0 top-0 group-hover:bg-black group-hover:bg-opacity-70">
          {gitUrl ? (
            <Link
              href={gitUrl}
              className="w-10 h-10 rounded-full p-2 bg-[#181818] text-[#ADB7BE] hover:text-white border-[1px] border-[#ADB7BE] hover:border-[1px] hover:border-white"
            >
              <CodeBracketIcon />
            </Link>
          ) : null}
          <Link
            href={previewUrl}
            className="w-10 h-10 rounded-full p-2 bg-[#181818] text-[#ADB7BE] hover:text-white border-[1px] border-[#ADB7BE] hover:border-[1px] hover:border-white"
          >
            <EyeIcon />
          </Link>
        </div>
      </div>
      <div className="p-3 rounded-b-xl bg-[#252525]">
        <h2 className="font-semibold text-xl text-[#ADB7BE] ">{title}</h2>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCards;
