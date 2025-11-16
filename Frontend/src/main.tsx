import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Blog from './Components/Blog/Blog.tsx';
import Portfolio from './Components/Portfolio.tsx';
import MyJourney from './Components/Blog/MyJourney.tsx'
import MyWebsite from './Components/Blog/MyWebsite.tsx';
import Routine from './Components/Blog/Routine.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Home",
    element: <App />
  },
  {
    path: "/Blog",
    element: <Blog />
  },
  {
    path: "/Portfolio",
    element: <Portfolio />
  },
  {
    path: "/MyJourney",
    element: <MyJourney />
  },
  {
    path: "/MyWebsite",
    element: < MyWebsite/>
  },
  {
    path: "/MyRoutine",
    element: <Routine/>
  }
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
