import React from 'react'

import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import "./index.css"
import "./reset.css"

import { RequireAuth, AuthProvider } from 'react-auth-kit'

import AppWrapper from './components/layout/wrapper/AppWrapper.tsx'

import {Home, LoginPage, RegistersPage, StudentsPage, ResponsiblesPage, LeavePage} from './components/pages'

import "./i18n"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: (
            <RequireAuth loginPath={"/login"}>
                <RegistersPage />
            </RequireAuth>
        ),
    },
    {
        path: "/student",
        element: (
            <RequireAuth loginPath={"/login"}>
                <StudentsPage />
            </RequireAuth>
        ),
    },
    {
        path: "/responsible",
        element: (
            <RequireAuth loginPath={"/login"}>
                <ResponsiblesPage />
            </RequireAuth>
        ),
    },
    {
        path: "/leave",
        element: (
            <RequireAuth loginPath={"/login"}>
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

            <AppWrapper>
                <RouterProvider router={router} />
            </AppWrapper>

        </AuthProvider>
    </React.StrictMode>,
    
)
