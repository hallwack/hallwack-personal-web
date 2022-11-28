import React from "react";
import AchievementCard from "../components/AchievementCard";
import { achievements } from "../data/data";

function Achievement() {
  return (
    <>
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
    </>
  );
}

export default Achievement;
