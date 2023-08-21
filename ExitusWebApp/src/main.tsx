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
import AppWrapper from './components/layout/wrapper/AppWrapper.tsx'
import Text from './static/Text.ts'
import Home from './components/pages/Home.tsx'

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
