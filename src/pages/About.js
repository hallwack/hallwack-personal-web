import React from 'react'
import avatar from "../assets/img/ava1.jpg"
import { FaFigma, FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <>
      <div className="">
        <img src={avatar} className="w-96 h-96 rounded object-cover" alt="Raihan Adam" />
      </div>
      <div className="flex flex-col space-y-2 w-full items-center gap-4">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-700 text-5xl font-bold">
          About Me
        </h1>
        <p className="text-slate-600 text-lg font-medium w-full lg:w-2/3 text-justify">
          I am a 7th semester student majoring in Informatics Engineering, UIN Sunan Gunung Djati Bandung. In the last two years, I have started as a junior web developer at a startup in Bandung. I have expertise in operating several frameworks or libraries to build websites, such as Laravel, React, to ExpressJs.
          <br />
          I have the motivation to learn new things, work hard, and work in a team. In addition, I also have responsibility for the assigned tasks, have a willingness to learn and improve myself, and am able to interact with many people, especially in new environments.
        </p>
      </div>
      <div>
        <ul className='flex flex-wrap gap-4 justify-center'>
          <li>
            <a href='https://github.com/hallwack' target="_blank" rel='noopener noreferrer'><FaGithub className='fill-sky-600' size={48} /></a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/raihan-adam-4011ba1b9' target="_blank" rel='noopener noreferrer'><FaLinkedin className='fill-sky-600' size={48} /></a>
          </li>
          <li>
            <a href='https://www.figma.com/@raihanadam' target="_blank" rel='noopener noreferrer'><FaFigma className='fill-sky-600' size={48} /></a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default About
