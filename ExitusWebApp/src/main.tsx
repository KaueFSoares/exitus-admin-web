import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from './components/pages/LoginPage.tsx';
import RegistersPage from './components/pages/RegistersPage.tsx';
import StudentsPage from './components/pages/StudentsPage.tsx';
import ResponsiblesPage from './components/pages/ResponsiblesPage.tsx';
import LeavePage from './components/pages/LeavePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistersPage />,
      },
      {
        path: "/student",
        element: <StudentsPage />,
      },
      {
        path: "/reponsible",
        element: <ResponsiblesPage />,
      },
      {
        path: "/leave",
        element: <LeavePage />,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
