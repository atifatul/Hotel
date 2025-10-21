// src/Components/Routing/Routing.jsx

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home";
import DestinationDetails from "../Destination/DestinationDetails"; // Naya component import karein
import Contact from "../Contact";
import About from "../About";
import Blog from "../Blog";
import ExploreTours from "../ExploreTours";
import InsideTour from "../insideTour";
import InsideBlog from "../insideBlog";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/Explore-Tours",
        element: <ExploreTours />,
      },
      {
        path: "/insideTour/:packageId",
        element: <InsideTour/>,
      },
      {
        path:"/blog/:name",
        element:<InsideBlog/>
      }
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={myroutes}></RouterProvider>;
};

export default Routing;
