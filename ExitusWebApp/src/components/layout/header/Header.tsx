import Text from '../../../static/Text.ts'
import Navbar from './Navbar.tsx'


const Header = () => {
    return (
        <header className='bg-light-green h-[13%] px-4 py-1 flex items-center justify-between'>
            <img
                className='max-h-[95%] w-auto max-w-[30%]'
                src={Text.src.logo}
                alt={Text.alt.logo}
            />

            <Navbar />
        </header>
    )
}

export default Header