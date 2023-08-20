import { useState } from 'react'
import Text from '../../static/Text.ts'
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { UserWithEmailAndPassword } from '../../interfaces/UserWithEmailAndPassword.ts'
import useLogin from '../../hooks/useLogin.ts'
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [isShown, setIsShown] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = useSignIn()

    const navigate = useNavigate()

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const user: UserWithEmailAndPassword = {
            email,
            password
        }

        try {

            const response = await useLogin(user)

            const data = await response.json()

            if (signIn({
                token: data.token,
                expiresIn: 60 * 60 * 24 * 3,
                tokenType: 'Bearer',
                authState: { email: email }
            })) {
                navigate('/register')
            } else {
                alert('Login failed')
            }


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='w-full h-screen bg-light-green flex justify-center items-center'>

            <form className='w-1/3 xl:w-1/4 flex flex-col items-center text-white' onSubmit={(e) => handleOnSubmit(e)}>

                <img
                    className='w-full mb-12'
                    src={Text.src.logo}
                    alt={Text.alt.logo}
                />

                <h1 className='font-extrabold text-5xl text-center mb-12'>
                    {Text.loginpage.title}
                </h1>

                <p className='text-center text-xl w-3/4 mb-12'>
                    {Text.loginpage.typeEmailAndPassword}
                </p>

                <div className='flex justify-start items-center bg-white/[.15] p-4 w-full rounded-xl mb-4'>
                    <AiOutlineMail className='text-2xl mr-4' />

                    <input
                        className='bg-transparent placeholder:color-white/[1] outline-none'
                        type="email"
                        name="email"
                        id="email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={Text.loginpage.emailPlaceholder}
                    />
                </div>

                <div className='flex justify-between items-center bg-white/[.15] p-4 w-full rounded-xl mb-4'>
                    <AiOutlineLock className='text-2xl mr-4' />

                    <input
                        className='bg-transparent placeholder:color-white/[1] outline-none w-[calc(100%-5rem)]'
                        type={isShown ? 'text' : 'password'}
                        name="password"
                        id="password"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={Text.loginpage.passwordPlaceholder}
                    />

                    <button
                        onClick={() => setIsShown(!isShown)}
                    >
                        {
                            isShown ?
                                <AiOutlineEyeInvisible className='text-2xl mr-4' /> :
                                <AiOutlineEye className='text-2xl mr-4' />
                        }
                    </button>
                </div>

                <p className='text-center text-base w-3/4 mb-12 cursor-pointer'>
                    {Text.loginpage.forgotPassword}
                </p>

                <button className='bg-dark-green py-3 px-12 font-extrabold text-2xl rounded-3xl border-2'>
                    {Text.loginpage.login}
                </button>

            </form>

        </div>
    )
}

export default LoginPage