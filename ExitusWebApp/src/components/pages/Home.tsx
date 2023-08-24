import { useEffect } from 'react'
import { useIsAuthenticated } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

/**
 * 
 * Only a redirect page for first access
 * 
 */
const Home = () => {
    const {t} = useTranslation()
    
    const navigate = useNavigate()

    const isAuthenticated = useIsAuthenticated()

    const onLoad = () => {
        if(isAuthenticated()){
            navigate("/register")
        }
        else {
            navigate("/login")
        }
    }

    useEffect(() => {
      onLoad()
    }, [])
    

    return <div></div>

}

export default Home