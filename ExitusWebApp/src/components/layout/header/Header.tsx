import {useTranslation} from 'react-i18next'
import Navbar from './Navbar.tsx'


const Header = () => {
    const {t} = useTranslation()
    
    return (
        <header className='bg-light-green h-[13%] px-4 py-1 flex items-center justify-between'>
            <img
                className='max-h-[95%] w-auto max-w-[30%]'
                src={t('src.logo')}
                alt={t('alt.logo')}
            />

            <Navbar />
        </header>
    )
}

export default Header