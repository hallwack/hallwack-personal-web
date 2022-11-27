import React from "react";
import Navbar from "../components/Navbar";
/* import { FaAward, FaExternalLinkAlt } from "react-icons/fa/index"; */
import AchievementCard from "../components/AchievementCard";
import { achievements } from "../data/data";

function Achievement() {
  return (
    <div className="flex flex-col bg-sky-50 min-h-screen">
      <Navbar />
      <section className="container mx-auto px-12 py-4 flex flex-col gap-8 justify-center items-center flex-grow">
        <h1 className="text-4xl font-bold text-sky-800 text-center">
          Achievement
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
          {achievements.map((achievement, key) => (
            <AchievementCard
              key={key}
              title={achievement.title}
              description={achievement.description}
              link={achievement.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Achievement;
