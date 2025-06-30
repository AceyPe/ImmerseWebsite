import React, { useState } from 'react'
import { Link } from 'react-router'
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { LoadingSpinnerOverLay } from '../../components/loadingSpinnerOverlay'
import { useAuth } from '../../contexts/AuthContext'

export const SigninPage = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate(); // React Router navigation
    const { onOpen } = useDisclosure()
    const { login } = useAuth();
    
    const sanitizeInput = (input) => {
        return input.trim().replace(/[<>/\\(){};:'",]/g, '');
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        onOpen();
        setLoading(true)
        setError("");
        const sanitizedEmail = sanitizeInput(emailInput);
        const sanitizedPassword = sanitizeInput(passwordInput);

        if (!sanitizedEmail || !sanitizedPassword)
        {
            setError("Email or Password is incorrect");
            setIsInvalid(true);
            setLoading(false)
            return;
        }

        try {
            const response = await login({ email: sanitizedEmail, password: sanitizedPassword });
            console.log(response);
            navigate('/', { replace: true });
        } catch (err) {
            setError("Email or Password is incorrect");
            setIsInvalid(true);
        } finally {
            setLoading(false);
        }

    }

    const onChangeEmail = (e) => {
        setEmailInput(e.target.value);
    }

    const onChangePassword = (e) => {
        setPasswordInput(e.target.value);
    }

    return (
        <section className='flex justify-center items-center w-full h-screen lg:h-[80vh]'>
            <div className='flex flex-col px-8 md:px-20 py-16 my-auto rounded-xl shadow-md  gap-4 items-center justify-center md:max-w-[700px] animate-backgroundFade bg-gradient-to-r from-[#273774] via-[#3c56b4] to-[#273774] bg-[length:200%_200%]'>
                <div className='title text-center'>
                    <h1 className="text-center text-white text-4xl font-bold">Sign in</h1>
                </div>
                <div className='signin flex flex-col gap-10 w-[20rem] md:w-[20rem] lg:w-[25rem] '>
                    <FormControl isInvalid={isInvalid} >
                        <div className='flex flex-col gap-8 mb-6'>
                            <div>
                                <FormLabel fontWeight={"bold"} fontSize={"xl"}>Email</FormLabel>
                                <Input className="" onChange={onChangeEmail} />
                            </div>
                            <div>
                                <FormLabel fontWeight={"bold"} fontSize={"xl"}>Password</FormLabel>
                                <Input className="" type='password' onChange={onChangePassword} />
                            </div>
                        </div>
                        <FormErrorMessage>{error}</FormErrorMessage>
                    </FormControl>
                    <Button type='submit' onClick={handleLogin}>Sign in</Button>
                    <h2 className='text-center text-primary text-lg'>Don't have an account? <Link to={"/signup"}>
                            <span className='text-xl text-third underline-offset-2 underline hover:text-yellow-400'>Sign up here!</span>
                    </Link>
                    </h2>
                    {loading && (
                        <LoadingSpinnerOverLay loading={loading} />
                    )}
                </div>
            </div>
        </section>
    )
}