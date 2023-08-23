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
import Text from './static/Text.ts'

import {Home, LoginPage, RegistersPage, StudentsPage, ResponsiblesPage, LeavePage} from './components/pages'

const router = createBrowserRouter([
    {
        path: Text.url.home,
        element: <Home />,
    },
    {
        path: Text.url.login,
        element: <LoginPage />,
    },
    {
        path: Text.url.register,
        element: (
            <RequireAuth loginPath={Text.url.login}>
                <RegistersPage />
            </RequireAuth>
        ),
    },
    {
        path: Text.url.student,
        element: (
            <RequireAuth loginPath={Text.url.login}>
                <StudentsPage />
            </RequireAuth>
        ),
    },
    {
        path: Text.url.responsible,
        element: (
            <RequireAuth loginPath={Text.url.login}>
                <ResponsiblesPage />
            </RequireAuth>
        ),
    },
    {
        path: Text.url.leave,
        element: (
            <RequireAuth loginPath={Text.url.login}>
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
