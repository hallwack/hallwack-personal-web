import Navbar from "../components/Navbar";
import {
  SiBootstrap,
  SiFigma,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiLua,
  SiNeovim,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVim,
  SiVisualstudiocode,
} from "react-icons/si";

function Skills() {
  return (
    <div className="flex flex-col bg-sky-50 min-h-screen">
      <Navbar />
      <section className="container mx-auto px-12 py-4 flex flex-col gap-8 justify-center items-center flex-grow">
        <h1 className="text-4xl font-bold text-sky-800 text-center">Skills</h1>
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-center text-sky-700 text-lg">Language</h2>
          <div className="flex gap-12 flex-wrap justify-center">
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiJavascript className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiPhp className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiLua className="fill-sky-800" size={48} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-center text-sky-700 text-lg">Framework</h2>
          <div className="flex gap-12 flex-wrap justify-center">
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiLaravel className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiBootstrap className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiTailwindcss className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiReact className="fill-sky-800" size={48} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-center text-sky-700 text-lg">Tools</h2>
          <div className="flex gap-12 flex-wrap justify-center">
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiFigma className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiNeovim className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiVim className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiGit className="fill-sky-800" size={48} />
            </div>
            <div className="bg-sky-200 p-6 rounded-lg flex max-w-sm gap-4">
              <SiVisualstudiocode className="fill-sky-800" size={48} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Skills;
