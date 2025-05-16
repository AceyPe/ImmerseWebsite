import {
    Input,
    FormControl,
    FormLabel,
    Textarea,} from '@chakra-ui/react';
import React from 'react';

export const ContactForm = () => {
    
    return (
        <FormControl >
            <div className='flex flex-col gap-8 mb-6 w-[500px]'>
                <div>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Full Name</FormLabel>
                    <Input className="!border-white text-white hover:!border-yellow-500 focus:!border-yellow-500 active:!border-yellow-500" />
                </div>
                <div>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Email</FormLabel>
                    <Input className="!border-white hover:!border-yellow-500 focus:!border-yellow-500 active:!border-yellow-500" />
                </div>
                <div>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Phone Number</FormLabel>
                    <Input className="!border-white hover:!border-yellow-500 focus:!border-yellow-500 active:!border-yellow-500" />
                </div>
                <div>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Message</FormLabel>
                    <Textarea className="!border-white hover:!border-yellow-500 focus:!border-yellow-500 active:!border-yellow-500 max-h-[300px]" />
                </div>
            </div>
                    {/* <FormErrorMessage>{error}</FormErrorMessage> */}
        </FormControl>
    )
}