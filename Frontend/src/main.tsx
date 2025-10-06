import { StrictMode } from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Blog from './Components/Blog.tsx';
import Portfolio from './Components/Portfolio.tsx';
import Contact from './Components/Contact.tsx';

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
    path: "/Contact",
    element: <Contact />
  },
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
