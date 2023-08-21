import React, { useEffect } from 'react'
import { useIsAuthenticated } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'
import Text from '../../static/Text.ts'

const Home = () => {
    
    const navigate = useNavigate()

    const isAuthenticated = useIsAuthenticated()

    const onLoad = () => {
        console.log(isAuthenticated())
        if(isAuthenticated()){
            navigate(Text.url.register)
        }
        else {
            navigate(Text.url.login)
        }
    }

    useEffect(() => {
      onLoad()
    }, [])
    

    return <div id='Reload'></div>

}

export default Home