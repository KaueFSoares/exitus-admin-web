import { Link } from 'react-router-dom'
import { NavbarSelected } from '../../../types/NavbarSelected.ts'

interface NavbarButtonProps {
    text: string,
    url: string,
    selected: boolean,
    navbarSelected: NavbarSelected,
    setNavbar: React.Dispatch<React.SetStateAction<NavbarSelected>>
}
const NavbarButton = ({ text, url, selected, navbarSelected, setNavbar }: NavbarButtonProps) => {
    return (
        <Link
            className={`text-xl font-bold py-2 px-6 rounded-xl flex items-center justify-center transition-all duration-200
                        ${selected ?
                            'bg-white text-light-green' :
                            'hover:text-light-green hover:bg-white text-white'}
                        `}
            to={url}
            onClick={() => setNavbar(navbarSelected)}
        >
            {text}
        </Link>
    )
}

export default NavbarButton