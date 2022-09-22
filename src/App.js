import React from "react";
import avatar from "./assets/img/ava2.jpg";

function App() {
  return (
    <div className="flex flex-col bg-sky-50 h-full">
      <nav className="py-14">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <h1 className="text-4xl font-bold text-sky-700">Raihan Adam</h1>
          <div>
            <ul className="flex flex-row items-center space-x-8 text-sky-800">
              <li className="bg-gradient-to-r from-sky-400 to-sky-400 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-[400ms] hover:bg-[length:100%_3px]">
                Home
              </li>
              <li>College</li>
              <li>Skills</li>
              <li>Contact Me</li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container mx-auto px-12 flex justify-between items-center flex-grow">
        <div className="flex flex-col space-y-2 w-1/2">
          <h2 className="text-5xl text-sky-800 font-bold">
            Hi, I'm Raihan Adam
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            A learner, interesting about a new thing, especially about web and
            mobile development.
          </p>
          <button className="px-6 py-2 rounded-lg w-auto self-start text-slate-700 bg-sky-200 text-lg font-semibold hover:bg-sky-700 hover:text-slate-100 transition hover:duration-300 duration-300">
            Know More
          </button>
        </div>
        <div>
          <img src={avatar} className="w-96 h-96 rounded-full object-cover" />
        </div>
      </section>
    </div>
  );
}

export default App;
