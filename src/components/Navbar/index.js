import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaAlignJustify, FaTimes } from "react-icons/fa"
import NavList from "../NavList";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-14 px-8">
      <div className="container mx-auto flex flex-row justify-between items-center gap-4 lg:gap-0">
        <NavLink to="/">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-700">Raihan Adam</h1>
        </NavLink>
        <div className="lg:block hidden">
          <ul className="flex flex-row items-center space-x-12 text-sky-500">
            <NavList href="/">Home</NavList>
            <NavList href="/about">About</NavList>
            <NavList href="/achievements">Achievements</NavList>
            <NavList href="/skills">Skills</NavList>
            <NavList href="/projects">Projects</NavList>
            <NavList href="/contact">Contact Me</NavList>
          </ul>
        </div>
        <Menu as="div" className="lg:hidden relative inline-block text-left">
          <Menu.Button><FaAlignJustify className="fill-sky-800" size={24} /></Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-2xl">
              <div className="p-4 flex flex-col text-sky-800 gap-2 text-lg font-medium">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink className={`px-2 py-1 rounded-md ${active ? "bg-sky-200" : ""}`} to="/">Home</NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink className={`px-2 py-1 rounded-md ${active ? "bg-sky-200" : ""}`} to="/about">About</NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink className={`px-2 py-1 rounded-md ${active ? "bg-sky-200" : ""}`} to="/achievements">Achievements</NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink className={`px-2 py-1 rounded-md ${active ? "bg-sky-200" : ""}`} to="/skills">Skills</NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink className={`px-2 py-1 rounded-md ${active ? "bg-sky-200" : ""}`} to="/projects">Projects</NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink className={`px-2 py-1 rounded-md ${active ? "bg-sky-200" : ""}`} to="/contact">Contact Me</NavLink>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
