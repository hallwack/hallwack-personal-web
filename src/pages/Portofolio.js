import React from 'react'
import Navbar from '../components/Navbar'
import PortofolioCard from '../components/PortofolioCard';
import { portofolios } from "../data/data";

const Portofolio = () => {
  return (
    <div className="flex flex-col bg-sky-50 h-full">
      <Navbar />
      <section className="container mx-auto px-12 flex flex-col gap-8 justify-center items-center flex-grow">
        <h1 className="text-4xl font-bold text-sky-800 text-center">
          Portofolio
        </h1>
        <div className="grid grid-cols-2 gap-12">
          {portofolios.map((porto, key) => (
            <PortofolioCard
              key={key}
              title={porto.title}
              description={porto.description}
              link={porto.link}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Portofolio
