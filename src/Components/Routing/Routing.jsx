// src/Components/Routing/Routing.jsx

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home";
import DestinationDetails from "../Destination/DestinationDetails"; // Naya component import karein

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
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={myroutes}></RouterProvider>;
};

export default Routing;