// src/Components/Routing/Routing.jsx

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home";
import DestinationDetails from "../Destination/DestinationDetails"; // Naya component import karein
import Contact from "../Contact";
import About from "../About";

let myroutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // Saare purane routes ko is ek dynamic route se replace karein
      {
        path: "/destination/:destinationName",
        element: <DestinationDetails />,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about_us",
        element:<About/>
      }
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={myroutes}></RouterProvider>;
};

export default Routing;