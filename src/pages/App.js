import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../assets/img/ava2.jpg";

function App() {
  return (
    <div className="container flex justify-between items-center flex-grow">
      <div className="flex flex-col space-y-2 w-full lg:w-1/2">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-700 text-5xl font-bold">
          Hi, I'm Raihan Adam
        </h2>
        <p className="text-slate-600 text-lg font-medium">
          A learner, interesting about a new thing, especially about web and
          mobile development.
        </p>
        <NavLink to="/about" className="px-6 py-2 rounded-lg w-auto self-start text-slate-700 bg-sky-200 text-lg font-semibold hover:bg-sky-700 hover:text-slate-100 transition hover:duration-300 duration-300">
          Know More
        </NavLink>
      </div>
      <div className="hidden lg:block">
        <img src={avatar} className="w-96 h-96 rounded-full object-cover" alt="Raihan Adam" />
      </div>
    </div>
  );
}

export default App;
