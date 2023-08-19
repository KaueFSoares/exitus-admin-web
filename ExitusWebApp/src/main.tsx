import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import "./index.css"
import "./reset.css"
import LoginPage from './components/pages/LoginPage.tsx'
import RegistersPage from './components/pages/RegistersPage.tsx'
import StudentsPage from './components/pages/StudentsPage.tsx'
import ResponsiblesPage from './components/pages/ResponsiblesPage.tsx'
import LeavePage from './components/pages/LeavePage.tsx'
import { RequireAuth, AuthProvider } from 'react-auth-kit'

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: (
            <RequireAuth loginPath='/login'>
                <RegistersPage />
            </RequireAuth>
        ),
    },
    {
        path: "/student",
        element: (
            <RequireAuth loginPath='/login'>
                <StudentsPage />
            </RequireAuth>
        ),
    },
    {
        path: "/responsible",
        element: (
            <RequireAuth loginPath='/login'>
                <ResponsiblesPage />
            </RequireAuth>
        ),
    },
    {
        path: "/leave",
        element: (
            <RequireAuth loginPath='/login'>
                <LeavePage />
            </RequireAuth>
        ),
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider
            authType={'cookie'}
            authName={'_auth'}
            cookieDomain={window.location.hostname}
            cookieSecure={false}
        >
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
)
