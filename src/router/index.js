import { createBrowserRouter } from "react-router-dom";
import Achievement from "../pages/Achievement";
import App from "../pages/App";
import Skills from "../pages/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "college",
  },
  {
    path: "achievement",
    element: <Achievement />,
  },
  {
    path: "skills",
    element: <Skills />
  },
]);
