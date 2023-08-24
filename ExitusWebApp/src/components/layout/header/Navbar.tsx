import NavbarButton from './NavbarButton.tsx'
import { useContext } from 'react'
import NavbarContext from '../../../context/NavbarContext.ts'
import {useTranslation} from 'react-i18next'

const Navbar = () => {

    const {t} = useTranslation()

    const {navbar, setNavbar} = useContext(NavbarContext)

    return (
        <nav className='flex h-1/3 gap-6 xl:h-1/2'>
            <NavbarButton
                text={t('navbartext.register')}
                url={t('url.register')}
                selected={navbar === "register"}
                navbarSelected='register'
                setNavbar={setNavbar}
            />

            <NavbarButton
                text={t('navbartext.student')}
                url={t('url.student')}
                selected={navbar === "student"}
                navbarSelected='student'
                setNavbar={setNavbar}
            />

            <NavbarButton
                text={t('navbartext.responsible')}
                url={t('url.responsible')}
                selected={navbar === "responsible"}
                navbarSelected='responsible'
                setNavbar={setNavbar}
            />

            <NavbarButton
                text={t('navbartext.leave')}
                url={t('url.leave')}
                selected={navbar === "leave"}
                navbarSelected='leave'
                setNavbar={setNavbar}
            />
        </nav>
    )
}

export default Navbar