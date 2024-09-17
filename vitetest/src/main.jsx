import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Github from "./Components/Github.jsx";
import { Route } from "react-router-dom";
import { getGithubInfo } from "./Components/Github.jsx";
import User from "./Components/User.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/:id" element={<User />} />
      <Route path="Github" element={<Github />} loader={getGithubInfo} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
