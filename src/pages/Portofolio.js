import React from 'react'
import Navbar from '../components/Navbar'
import PortofolioCard from '../components/PortofolioCard';
import { portofolios } from "../data/data";

const Portofolio = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-sky-800 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto">
        {portofolios.map((porto, key) => (
          <PortofolioCard
            key={key}
            title={porto.title}
            description={porto.description}
            link={porto.link}
          />
        ))}
      </div>
    </>
  )
}

export default Portofolio
