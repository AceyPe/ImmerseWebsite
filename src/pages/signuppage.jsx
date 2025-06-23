import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
    Input,
    FormControl,
    FormLabel,
    Button,
    FormErrorMessage,
    FormHelperText,
    List,
    ListItem,
    useDisclosure,
} from '@chakra-ui/react'
import { LoadingSpinnerOverLay } from '../components/loadingSpinnerOverlay';
import { Register } from '../api/api';
import { RadioRating } from '../components/radiorating'

export const SignupPage = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [role, setRole] = useState('');
    const [parentId, setParentId] = useState('');
    const [therapistId, setTherapistId] = useState('');
    const [certificateFile, setCertificateFile] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const { onOpen } = useDisclosure()


    //loading 
    const [loading, setLoading] = useState(false);

    // errors
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [roleInvalid, setRoleInvalid] = useState(false);
    const [parentIdError, setParentIdError] = useState(false);
    const [therapistIdError, setTherapistIdError] = useState(false);
    const navigate = useNavigate();

    //error messages
    const emailErrorMessage = "please enter a valid email address.";
    const nameErrorMessage = "please enter a valid name";;
    const phoneErrorMessage = "please enter a valid phone number";
    const roleInvalidMessage = "please Choose a role";
    const parentIdMessage = "please enter a valid parent Id (all numbers)"
    const therapistIdMessage = "please enter a valid therapist Id (all numbers)"

    //regix
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z]{3,}(?: [a-zA-Z]{2,})*$/;
    const phoneRegex = /[0-9]{11}$/;
    const idRegix = /^\d+$/;
    //password regix
    const minLength = passwordInput.length >= 6;
    const hasLowercase = /[a-z]/.test(passwordInput);
    const hasUppercase = /[A-Z]/.test(passwordInput);
    const hasDigit = /\d/.test(passwordInput);
    const hasSpecialChar = /[@$!%*?&]/.test(passwordInput);

    const onChangeName = (e) => {
        const value = e.target.value;
        setNameInput(value);

        if (value && !nameRegex.test(value.trim())) {
            setNameError(true)
        } else {
            setNameError(false);
        }
    }
    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmailInput(value);

        if (value && !emailRegex.test(value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }
    const onChangePassword = (e) => {
        const value = e.target.value;
        setPasswordInput(value);

        if (value && (!minLength || !hasLowercase || !hasUppercase || !hasDigit || !hasSpecialChar))
            setPasswordError(true);
        else setPasswordError(false);
    };
    const onChangeAge = (e) => setAgeInput(e.target.value);

    const onChangePhone = (e) => {
        const value = e.target.value;
        setPhoneInput(value);

        if (value && !phoneRegex.test(value)) {
            setPhoneError(true);
        } else setPhoneError(false);
    }

    const onChangeParentId = (e) => {
        const value = e.target.value;
        setParentId(value);

        if (value && !idRegix.test(value)) {
            setParentIdError(true);
        } else setParentIdError(false);
    }

    const onChangeTherapistId = (e) => {
        const value = e.target.value;
        setTherapistId(value);

        if (value && !idRegix.test(value)) {
            setTherapistIdError(true);
        } else setTherapistIdError(false);
    }

    const onUploadCertificate = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setCertificateFile(file);
            // Optionally send to backend or store temporarily
        }
    };


    const sanitizeInput = (input) => {
        return input.trim().replace(/[<>/\\(){};:'",]/g, '');
    }

    const handleRegister = async (e) => {
        console.log("hello")
        e.preventDefault();
        onOpen();
        setLoading(true)

        if (!role)
        {
            setRoleInvalid(true);
            return;
        }
        const sanitizedName = sanitizeInput(nameInput);
        const sanitizedEmail = sanitizeInput(emailInput);
        const sanitizedAge = sanitizeInput(ageInput);
        const sanitizedPhone = sanitizeInput(phoneInput);
        const sanitizedPassword = sanitizeInput(passwordInput);
        const sanitizedParentId = parentId? sanitizeInput(parentId) : null;
        const sanitizedTherapistId = sanitizeInput(therapistId);

        console.log(therapistId);


        try {
            const response = await Register({ password: sanitizedPassword, name: sanitizedName, email: sanitizedEmail, age: sanitizedAge, phone: sanitizedPhone, role, parentId: sanitizedParentId, therapistId: sanitizedTherapistId});
            console.log(response);
            navigate('/', { replace: true });
        } catch (err) {
            console.error("couldn't register:", err)
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className='signup-wrapper flex  flex-col items-center py-20 gap-10 text-white'>

            <h1 className="text-center text-primary text-4xl font-bold">Sign up page</h1>
            <div className='signup flex flex-col gap-10 lg:w-[40rem] md:w-[25rem] w-[15rem] '>

                {/* full name control */}
                <FormControl isRequired isInvalid={nameError}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Full Name</FormLabel>
                    <Input className="text-white hover:!border-yellow-500 focus:!border-yellow-500" onChange={onChangeName} />
                    <FormErrorMessage>{nameErrorMessage}</FormErrorMessage>
                </FormControl>

                {/* Email control */}
                <FormControl isRequired isInvalid={emailError}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Email</FormLabel>
                    <Input className=" text-white hover:!border-yellow-500 focus:!border-yellow-500" type='Email' onChange={onChangeEmail} />
                    <FormErrorMessage>{emailErrorMessage}</FormErrorMessage>
                </FormControl>

                {/* Age control */}
                <FormControl isRequired>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Age</FormLabel>
                    <Input className=" text-white hover:!border-yellow-500 focus:!border-yellow-500" onChange={onChangeAge} />
                </FormControl>

                {/* phone number */}
                <FormControl isRequired isInvalid={phoneError}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Phone Number</FormLabel>
                    <Input className=" text-white hover:!border-yellow-500 focus:!border-yellow-500" onChange={onChangePhone} />
                    <FormErrorMessage>{phoneErrorMessage}</FormErrorMessage>
                </FormControl>

                {/* password control */}
                <FormControl isRequired isInvalid={passwordError}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"} >Password</FormLabel>
                    <Input className="text-white hover:!border-yellow-500 focus:!border-yellow-500" type='password' onChange={onChangePassword} />
                    <FormErrorMessage>
                        <List>
                        <p>please enter a valid password, it should contain the following:</p>
                            {!minLength && (
                                <ListItem>&nbsp; &nbsp; &nbsp; &nbsp; Password must be at least 8 characters long.</ListItem>
                            )}
                            {!hasLowercase && (
                                <ListItem>&nbsp; &nbsp; &nbsp; &nbsp; Password must contain at least one lowercase letter.</ListItem>
                            )}
                            {!hasUppercase && (
                                <ListItem>&nbsp; &nbsp; &nbsp; &nbsp; Password must contain at least one uppercase letter.</ListItem>
                            )}
                            {!hasDigit && <ListItem> &nbsp; &nbsp; &nbsp; &nbsp; Password must contain at least one digit.</ListItem>}
                            {!hasSpecialChar && (
                                <ListItem>
                                    &nbsp; &nbsp; &nbsp; &nbsp; Password must contain at least one special character (e.g., !@#$%^&*).
                                </ListItem>
                            )}
                            </List>
                    </FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={roleInvalid}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Choose the type of account you are registering for </FormLabel>
                    <RadioRating ratingType="role" setValue={setRole} />
                    <FormErrorMessage>{roleInvalidMessage}</FormErrorMessage>
                </FormControl>

                {/* Additional Fields for patients */}
                {role === "patient" &&
                    <FormControl isInvalid={parentIdError}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>ParentId (if parent is present)</FormLabel>
                    <Input className=" text-white hover:!border-yellow-500 focus:!border-yellow-500" onChange={onChangeParentId} />
                    <FormErrorMessage>{parentIdMessage}</FormErrorMessage>
                    </FormControl>}
                
                {role === "patient" &&
                    <FormControl isRequired isInvalid={therapistIdError}>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>TherpistId (refer to your therapist)</FormLabel>
                        <Input className=" text-white hover:!border-yellow-500 focus:!border-yellow-500" onChange={onChangeTherapistId} />
                        <FormErrorMessage>{therapistIdMessage}</FormErrorMessage>
                    </FormControl>}
                
                {/* Additional Fields for therpist */}
                
                {role === "therapist" && (
                    <FormControl isRequired>
                        <FormLabel fontWeight="bold" fontSize="xl">Upload your Certification</FormLabel>
                        <Input
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={onUploadCertificate}
                            className="text-white hover:!border-yellow-500 focus:!border-yellow-500"
                        />
                        <FormHelperText color={"orange"}>Heads up: your file will be reviewed before approval.</FormHelperText>
                    </FormControl>
                )}
                
                <Button type='submit' onClick={handleRegister}>Sign up</Button>
            </div>
            <h2 className='text-center text-lg'>Already have an account? <Link to={"/signin"}><span className='text-xl text-third underline-offset-2 underline hover:text-yellow-400'>Sign in here!</span></Link></h2>
            {loading && 
                <LoadingSpinnerOverLay loading={loading} />
            }
        </div>
    )
}