import React from 'react'
import {
    Input,
    FormControl,
    FormLabel,
    Button,
} from '@chakra-ui/react'
import { Link } from 'react-router'

export const SigninPage = () => {
    return (
        <div className='signin-wrapper flex flex-col items-center py-20 gap-10'>
            <div className='title text-center'>
                <h1 className="text-center text-primary text-4xl font-bold">Sign in page</h1>
            </div>
            <div className='signin flex flex-col gap-10 w-[20rem]'>
                <FormControl>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Username</FormLabel>
                    <Input className="!border-primary hover:!border-black"  />
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Password</FormLabel>
                    <Input className="!border-primary hover:!border-black" type='password'/>
                </FormControl>
                <Button type='submit'>Sign in</Button>

                <h2 className='text-center text-lg'>Don't have an account? <Link to={"/signup"}>
                        <span className='text-xl text-primary underline-offset-2 underline hover:text-blue-800'>Sign up here!</span>
                </Link>
                </h2>
            </div>
        </div>
    )
}