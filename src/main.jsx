import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Contact from './pages/Contact/index';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import './index.css'
import Assistir from './pages/Assistir';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/assistir",
        element: <Assistir />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
