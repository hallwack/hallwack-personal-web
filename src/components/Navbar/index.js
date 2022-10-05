import React from "react";
import NavList from "../NavList";

function Navbar() {
  return (
    <nav className="py-14">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <h1 className="text-4xl font-bold text-sky-700">Raihan Adam</h1>
        <div>
          <ul className="flex flex-row items-center space-x-12 text-sky-500">
            <NavList href="/">Home</NavList>
            <NavList href="/college">College</NavList>
            <NavList href="/achievement">Achievement</NavList>
            <NavList href="skills">Skills</NavList>
            <NavList href="contact">Contact Me</NavList>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;