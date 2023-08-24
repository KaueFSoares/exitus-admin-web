import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, LoginPage, RegistersPage, StudentsPage, ResponsiblesPage, LeavePage, NotFound } from './components/pages'
import { AuthProvider, RequireAuth } from 'react-auth-kit'
import { useTranslation } from 'react-i18next'
import AppContextWrapper from './components/layout/wrapper/AppContextWrapper.tsx'

const App = () => {

    const { t } = useTranslation()

    const router = createBrowserRouter([
        {
            path: t('url.home'),
            element: <Home />,
        },
        {
            path: t('url.login'),
            element: <LoginPage />,
        },
        {
            path: t('url.register'),
            element: (
                <RequireAuth loginPath={t('url.login')}>
                    <RegistersPage />
                </RequireAuth>
            ),
        },
        {
            path: t('url.student'),
            element: (
                <RequireAuth loginPath={t('url.login')}>
                    <StudentsPage />
                </RequireAuth>
            ),
        },
        {
            path: t('url.responsible'),
            element: (
                <RequireAuth loginPath={t('url.login')}>
                    <ResponsiblesPage />
                </RequireAuth>
            ),
        },
        {
            path: t('url.leave'),
            element: (
                <RequireAuth loginPath={t('url.login')}>
                    <LeavePage />
                </RequireAuth>
            ),
        },
        {
            path: "*",
            element: <NotFound />
        }
    ])

    return (
        <AuthProvider
            authType={'cookie'}
            authName={'_auth'}
            cookieDomain={window.location.hostname}
            cookieSecure={false}
        >
            <AppContextWrapper>
                <RouterProvider router={router} />
            </AppContextWrapper>
        </AuthProvider>
    )
}

export default App