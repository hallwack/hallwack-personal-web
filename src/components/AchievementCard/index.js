import React from "react";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function AchievementCard({ title, description, link }) {
  return (
    <div className="bg-sky-200 p-8 rounded-lg flex flex-col items-center lg:flex-row lg:items-start max-w-sm gap-4">
      <div className="mr-4">
        <FaAward className="fill-sky-800" size={48} />
      </div>
      <div className="flex flex-col justify-between w-full h-full">
        <h2 className="text-sky-800 font-semibold text-2xl">{title}</h2>
        <p className="text-slate-600 mb-6">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded hover:text-slate-800 font-medium hover:bg-sky-300 bg-sky-700 text-slate-100 transition hover:duration-300 duration-300 w-auto self-end flex items-center"
        >
          Show More
          <FaExternalLinkAlt className="ml-1" />
        </a>
      </div>
    </div>
  );
}

export default AchievementCard;
