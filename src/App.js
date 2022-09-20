import React from "react";
import avatar from "./assets/img/ava2.jpg";

function App() {
  return (
    <div className="flex flex-col bg-gray-200 h-screen">
      <nav className="py-12 bg-sky-700 text-slate-100">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold text-slate-200">Raihan Adam</h1>
          <div>
            <ul className="flex flex-row items-center space-x-8">
              <li>Home</li>
              <li>About</li>
              <li>College</li>
              <li>Skills</li>
              <li>Contact Me</li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container mx-auto px-12 flex justify-between items-center flex-grow">
        <div className="flex flex-col space-y-2">
          <h2 className="text-5xl text-slate-700 font-bold">
            Hi, I'm Raihan Adam
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            I'm interested into programming, especially in Web Programming
          </p>
          <button className="px-3 py-2 rounded-lg bg-sky-400 text-lg font-semibold grow-0">
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
