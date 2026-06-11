import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><News key="business" pageSize={5} country="us" category="business" /></>,
  },
  {
    path: "/business",
    element: <><Navbar /><News key="business" pageSize={5} country="us" category="business" /></>,
  },
  {
    path: "/entertainment",
    element: <><Navbar /><News key="entertainment" pageSize={5} country="us" category="entertainment" /></>,
  },
  {
    path: "/general",
    element: <><Navbar /><News key="general" pageSize={5} country="us" category="general" /></>,
  },
  {
    path: "/health",
    element: <><Navbar /><News key="health" pageSize={5} country="us" category="health" /></>,
  },
  {
    path: "/science",
    element: <><Navbar /><News key="science" pageSize={5} country="us" category="science" /></>,
  },
  {
    path: "/sports",
    element: <><Navbar /><News key="sports" pageSize={5} country="us" category="sports" /></>,
  },
  {
    path: "/technology",
    element: <><Navbar /><News key="technology" pageSize={5} country="us" category="technology" /></>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
