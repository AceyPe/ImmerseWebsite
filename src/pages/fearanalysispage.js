import React from "react"
import { RadioRating } from '../components/radiorating'
import {
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'


export const FearAnalysisPage = () => {
    return ( 
            <div className="form-wrapper flex flex-col items-center gap-10 py-20">
                <div className="title flex flex-col gap-4">
                    <h1 className="text-center text-primary text-4xl font-bold ">Fear Analysis Form </h1>
                    <h2 className="text-2xl">this form will help us keep track of how the treatment is going before and after each session</h2>
                </div>
                <div className="form flex flex-col gap-10">
                    {/* Name */}
                    <FormControl isRequired>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>Name</FormLabel>
                        <Input className="!border-primary hover:!border-black" />
                    </FormControl>
                    {/* Rating for treatment */}
                    <FormControl isRequired>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>Rating of the experience</FormLabel>
                        <RadioRating />
                    </FormControl>
                    {/* Rating for treatment */}
                    <FormControl isRequired>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>How are you feeling?</FormLabel>
                        <RadioRating />
                    </FormControl>
                    {/* Rating for treatment */}
                    <FormControl isRequired>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>How stressful are you?</FormLabel>
                        <RadioRating />
                    </FormControl>
                    
                    <Button type="Submit" colorScheme="softGreen">Submit</Button>
                </div>
            </div>
    )
}