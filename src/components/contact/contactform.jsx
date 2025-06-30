import {
    Input,
    FormControl,
    FormLabel,
    Button,
    Text,
    Textarea,} from '@chakra-ui/react';
import { useState } from 'react';
import { submitForm } from '../../api/api';
import { useToast } from '@chakra-ui/react'


export const ContactForm = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const toast = useToast();

    const [phoneNumberInvalid, setPhoneNumberInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    
    const sanitizeInput = (input) => {
        return String(input).trim().replace(/[<>/\\(){};:'",]/g, '');
    }
    
    const onSubmit = async () => {
        const sanitizedFullName = sanitizeInput(fullName);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedPhoneNumber = sanitizeInput(phoneNumber);
        const sanitizedMessage = sanitizeInput(message);
        

        if (!sanitizedFullName || (!sanitizedEmail || !sanitizedPhoneNumber) || !sanitizedMessage)
        {
            setError("Please fill the form with your information!");
            return;
        }

        console.log(sanitizedEmail)
        if (sanitizedEmail) {
            const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!checkEmail.test(sanitizedEmail))
                {
                setEmailInvalid(true);
                return;
            }
            else {
                
                setEmailInvalid(false);
            }
        }

        if (sanitizedPhoneNumber) {
            const checkPhoneRegix = /^0\d{10}$/;
            if (!checkPhoneRegix.test(sanitizedPhoneNumber))
            {
                setPhoneNumberInvalid(true);
                return;
            }
            else {
                setPhoneNumberInvalid(false);
            }
        }

        const data = {
            fullname: sanitizedFullName,
            email: sanitizedEmail,
            phonenumber: sanitizedPhoneNumber,
            message: sanitizedMessage
        }
        
        try {
            const res = await submitForm(data, "contact");
            if (res) {
                toast({
                    title: "Message sent!",
                    description: "Your message was submitted successfully.",
                    status: "success",
                    duration: 1500,
                    isClosable: true,
                });
            } else {
                throw new Error("No response returned from server.");
            }
        } catch (error) {
            toast({
                title: "Submission failed",
                description: "There was an issue submitting your form. Please try again later.",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
        }
    }



    
    return (
        <FormControl>
            <div className='flex flex-col gap-8 mb-6 w-[300px] md:w-[500px]'>
                <FormControl>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Full Name</FormLabel>
                    <Input onChange={(e) => setFullName(e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Email</FormLabel>
                    <Input onChange={(e) => setEmail(e.target.value)} isInvalid={emailInvalid} />
                    {emailInvalid && <p className='text-red-500'>Please enter a valid Email!</p>}
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"} >Phone Number</FormLabel>
                    <Input onChange={(e) => setPhoneNumber(e.target.value)} isInvalid={phoneNumberInvalid} />
                    {phoneNumberInvalid && <p className='text-red-500'>Please enter a valid phonenumber!</p>}
                </FormControl>
                <FormControl>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Message</FormLabel>
                    <Textarea className="max-h-[300px]" onChange={(e) => setMessage(e.target.value)} maxLength={500} placeholder='type your message...' />
                    <Text className="text-sm text-right text-gray-400 mt-1">
                        {message.length} / 500
                    </Text>
                    {error && <p className='text-red-500'>{error}</p>}
                </FormControl>
                <Button className='uppercase' type='submit' onClick={() => onSubmit()}>Send</Button>
            </div>
        </FormControl>
    )
}