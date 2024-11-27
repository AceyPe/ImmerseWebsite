import React from 'react'
import { Link } from 'react-router'
import {
    Input,
    FormControl,
    FormLabel,
    Button,
} from '@chakra-ui/react'

export const SignupPage = () => {
    return (
        <div className='signup-wrapper flex flex-col items-center py-20 gap-10'>
            <div className='title text-center'>
                <h1 className="text-center text-primary text-4xl font-bold">Sign up page</h1>
            </div>
            <div className='signup flex flex-col gap-10 w-[20rem]'>
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Username</FormLabel>
                    <Input className="!border-primary hover:!border-black" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Email</FormLabel>
                    <Input className="!border-primary hover:!border-black" type='Email' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Age</FormLabel>
                    <Input className="!border-primary hover:!border-black" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Password</FormLabel>
                    <Input className="!border-primary hover:!border-black" type='password' />
                </FormControl>
                <Button type='submit'>Sign up</Button>
            </div>
            <h2 className='text-center text-lg'>Already have an account? <Link to={"/signin"}><span className='text-xl text-primary underline-offset-2 underline hover:text-blue-800'>Sign in here!</span></Link></h2>
        </div>
    )
}