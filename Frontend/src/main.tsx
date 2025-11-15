import { StrictMode } from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Blog from './Components/Blog/Blog.tsx';
import Portfolio from './Components/Portfolio.tsx';


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
  }
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
