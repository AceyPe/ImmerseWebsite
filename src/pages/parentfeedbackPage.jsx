import React, { useEffect } from "react"
import { RadioRating } from '../components/radiorating'
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router"


export const ParentFeedBackPage = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if ((user && user.role !== "parent") || !user) {
            navigate('/signin');
        }
    }, [user, navigate]);



    return (
        <div className="form-wrapper flex flex-col items-center gap-10 py-20 text-white">
            <div className="title flex flex-col gap-4">
                <h1 className="text-center text-primary text-4xl font-bold ">Parent's Feedback Form </h1>
                <h2 className="text-2xl">this form will help us keep track of how the treatment is going while the child is at home</h2>
            </div>
            <div className="form flex flex-col gap-4">
                {/* Name */}
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Parent Name</FormLabel>
                    <Input className="!border-white text-white hover:!border-yellow-500 focus:!border-yellow-500" />
                </FormControl>
                {/* Email */}
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Email</FormLabel>
                    <Input className="!border-white text-white hover:!border-yellow-500 focus:!border-yellow-500" type="Email" />
                </FormControl>
                {/* Child's Name */}
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Child's Name</FormLabel>
                    <Input className="!border-white text-white hover:!border-yellow-500 focus:!border-yellow-500" />
                </FormControl>
                {/* Rating for treatment */}
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Rating for treatment</FormLabel>
                    <RadioRating ratingType={"number"} />
                </FormControl>
                {/* Commets / Explaination of behaviour of child */}
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Behaviour of Child(better or worse)</FormLabel>
                    <Textarea className="!border-white text-white hover:!border-yellow-500 focus:!border-yellow-500" height={"200px"} type="Email" />
                </FormControl>
                <Button type="Submit" colorScheme="Yellow">Submit</Button>
            </div>
        </div>
    )
}