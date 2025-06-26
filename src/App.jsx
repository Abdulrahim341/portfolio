import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router";
export default function App() {
  const routes = createBrowserRouter([
    {
      index:true,
      element:<Navigate to="/home:"/>
    },
    {
      path:"/home",
      element:<Home/>

    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/portfolio",
      element:<Portfolio/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]);

  return (
  
<RouterProvider router={routes}/>
  );
}
