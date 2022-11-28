import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import Achievement from "../pages/Achievement";
import App from "../pages/App";
import Contact from "../pages/Contact";
import Portofolio from "../pages/Portofolio";
import Skills from "../pages/Skills";

export const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "achievements",
        element: <Achievement />,
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "projects",
        element: <Portofolio />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);
