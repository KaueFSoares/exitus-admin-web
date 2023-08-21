import NavbarButton from './NavbarButton.tsx'
import Text from '../../../static/Text.ts'
import { useContext } from 'react'
import NavbarContext from '../../../context/NavbarContext.ts'

const Navbar = () => {

    const {navbar, setNavbar} = useContext(NavbarContext)

    return (
        <nav className='flex h-1/3 gap-6 xl:h-1/2'>
            <NavbarButton
                text={Text.navbartext.register}
                url={Text.url.register}
                selected={navbar === "register"}
                navbarSelected='register'
                setNavbar={setNavbar}
            />

            <NavbarButton
                text={Text.navbartext.student}
                url={Text.url.student}
                selected={navbar === "student"}
                navbarSelected='student'
                setNavbar={setNavbar}
            />

            <NavbarButton
                text={Text.navbartext.responsible}
                url={Text.url.responsible}
                selected={navbar === "responsible"}
                navbarSelected='responsible'
                setNavbar={setNavbar}
            />

            <NavbarButton
                text={Text.navbartext.leave}
                url={Text.url.leave}
                selected={navbar === "leave"}
                navbarSelected='leave'
                setNavbar={setNavbar}
            />
        </nav>
    )
}

export default Navbar