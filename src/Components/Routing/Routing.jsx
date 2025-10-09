import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Home";
import J_K from "../Destination/J_K";
import Rajasthan from "../Destination/Rajasthan";
import HimachalPradesh from "../Destination/HimachalPradesh";
import Kerala from "../Destination/Kerala";
import Goa from "../Destination/Goa";
import UttarPradesh from "../Destination/UttarPradesh";

let myroutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/jammu-and-kashmir",
        element:<J_K/>

      },
      {
        path:"/rajasthan",
        element:<Rajasthan/>
      },
      {
        path:"/himachal-pradesh",
        element:<HimachalPradesh/>
      },
      {
        path:"/kerala",
        element:<Kerala/>
      },
      {
        path:"/goa",
        element:<Goa/>
      },
      {
        path:"/uttar-pradesh",
        element:<UttarPradesh/>
      }
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={myroutes}></RouterProvider>;
};

export default Routing;
