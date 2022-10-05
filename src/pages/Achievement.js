import React from "react";
import Navbar from "../components/Navbar";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa/index";
import AchievementCard from "../components/AchievementCard";

function Achievement() {
  return (
    <div className="flex flex-col bg-sky-50 h-full">
      <Navbar />
      <section className="container mx-auto px-12 flex flex-col gap-8 justify-center items-center flex-grow">
        <h1 className="text-4xl font-bold text-sky-800 text-center">
          Achievement
        </h1>
        <div className="grid grid-cols-2 gap-12">
          <AchievementCard
            title="Dicoding"
            description="Belajar Membuat Front-End Web untuk Pemula"
            link="https://www.dicoding.com/certificates/QLZ9100MDP5D"
          />
          <AchievementCard
            title="Dicoding"
            description="Belajar Membuat Aplikasi Back-End Web untuk Pemula"
            link="https://www.dicoding.com/certificates/81P21M8YYZOY"
          />
          <AchievementCard
            title="Dicoding"
            description="Belajar Dasar Pemrograman Javascript"
            link="https://www.dicoding.com/certificates/KEXL3WWR4PG2"
          />
          <AchievementCard
            title="Dicoding"
            description="Belajar Dasar Pemrograman Web"
            link="https://www.dicoding.com/certificates/4EXG501LDXRL"
          />
        </div>
      </section>
    </div>
  );
}

export default Achievement;
