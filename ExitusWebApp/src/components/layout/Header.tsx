import Text from '../../static/Text.ts'
import Navbar from './Navbar.tsx'


const Header = () => {
    return (
        <header className='bg-light-green h-[15%] px-4 py-1 flex items-center justify-between'>
            <img
                className='h-full w-auto'
                src={Text.src.logo}
                alt={Text.alt.logo}
            />

            <Navbar />
        </header>
    )
}

export default Header