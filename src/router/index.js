import { createBrowserRouter } from "react-router-dom";
import Achievement from "../pages/Achievement";
import App from "../pages/App";
import Contact from "../pages/Contact";
import Portofolio from "../pages/Portofolio";
import Skills from "../pages/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "achievement",
    element: <Achievement />,
  },
  {
    path: "skills",
    element: <Skills />
  },
  {
    path: "portofolios",
    element: <Portofolio />
  },
  {
    path: "contact",
    element: <Contact />
  }
]);
