import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFound = () => {
    const { t } = useTranslation()
    return (
        <div className='text-white h-screen w-full bg-light-green flex items-center justify-center flex-col'>
            <h1 className='text-9xl font-semibold mb-8'>
                {t('notfoundpage.title')}
            </h1>

            <h2 className='text-4xl font-bold mb-8'>
                {t('notfoundpage.subtitle')}
            </h2>

            <p className='text-2xl text-center w-5/6 mb-8'>
                {t('notfoundpage.message')}
            </p>

            <Link 
            to='/'
            className='bg-white text-light-green px-4 py-2 border-2 border-white border-solid rounded-md font-semibold text-xl hover:bg-light-green hover:text-white  transition duration-300 ease-in-out'
            >
                {t('notfoundpage.back')}
            </Link>
        </div>
    )
}

export default NotFound