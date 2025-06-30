import React,{ useEffect, useState } from "react"
import { RadioRating } from '../components/radiorating'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure,
    Textarea,
    Text,
    useToast
} from '@chakra-ui/react'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router"
import { submitForm } from "../api/api"
import { LoadingSpinnerOverLay } from "../components/loadingSpinnerOverlay"


export const ParentFeedBackPage = () => {

    const [nameInput, setNameInput] = useState('');
    const [patientNameInput, setPatientNameInput] = useState('');
    const [patientId, setPatientId] = useState('');
    const [ratingOfTreatment, setRatingOfTreatment] = useState(0);
    const [behaviourOfChild, setBehaviourOfChild] = useState('');
    
    // Errors (invalids)
    const [error, setError] = useState("");
    const [nameInvalid, setNameInvalid] = useState(false);
    const [patientNameInvalid, setPatientNameInvalid] = useState(false);
    const [patientIdInvalid, setPatientIdInvalid] = useState(false);
    const [behaviourOfChildInvalid, setBehaviourOfChildInvalid] = useState(false);

    const navigate = useNavigate();
    const toast = useToast();
    const { onOpen } = useDisclosure();
    const { user, authLoading } = useAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            if (!authLoading)
            {
                if (!user)
                {
                    navigate('/');
                }
                if ((user && user.role !== "parent")) {
                    navigate('/signin');
                }
            }
    }, [user, navigate, authLoading]);
    
    const sanitizeInput = (input) => {
        return String(input).trim().replace(/[<>/\\(){};:'",]/g, '');
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        onOpen();
        setLoading(true)
        setError("");
        
        // Validation
        const isNameEmpty = !nameInput;
        const isPatientNameEmpty = !patientNameInput;
        const isPatientIdEmpty = !patientId;
        const isBehaviourOfChildEmpty = !behaviourOfChild;

        setNameInvalid(isNameEmpty);
        setPatientNameInvalid(isPatientNameEmpty);
        setPatientIdInvalid(isPatientIdEmpty);
        setBehaviourOfChildInvalid(isBehaviourOfChildEmpty);
        
        const patientIdRegix = /^\d+$/;
    
        if (
            isNameEmpty || isPatientNameEmpty || isPatientIdEmpty || isBehaviourOfChildEmpty
        ) {
            setError("Please fill in all the required fields in the form!");
            setLoading(false);
            return;
        }

        const sanitizedName = sanitizeInput(nameInput);
        const sanitizedPatientName = sanitizeInput(patientNameInput);
        let sanitizedPatientId;
        if (patientIdRegix.test(sanitizeInput(patientId))) {
            sanitizedPatientId = sanitizeInput(patientId);
        }
        else {
            setError("Patient Id must be a number!");
            setPatientIdInvalid(true);
            return;
        }
        const sanitizedBehaviour = sanitizeInput(behaviourOfChild);
        const sanitizedRatingOfTreatment = sanitizeInput(ratingOfTreatment);
    
        const data = {
            parentId: user.id,
            patientId: sanitizedPatientId,
            parentName: sanitizedName,
            patientName: sanitizedPatientName,
            rating: sanitizedRatingOfTreatment,
            behaviourOfChild: sanitizedBehaviour
        }

        try {
            const res = await submitForm(data, "contact");
            if (res) {
                toast({
                    title: "Form submitted!",
                    description: "Your Form was submitted successfully.",
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

        setLoading(false);

        }



    return !loading ? (
        <section className="flex justify-center">
            <div className="form-wrapper flex flex-col items-center gap-10 py-20 bg-[#2d4087] px-8 md:px-20 my-2 rounded-xl shadow-md justify-center max-w-[550px] md:max-w-[1200px]">
                <div className="title flex flex-col gap-4">
                    <h1 className="text-center text-primary text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold ">Parent's Feedback Form </h1>
                    <h2 className="text-lg lg:text-2xl text-center">this form will help us keep track of how the treatment is going while the child is at home</h2>
                </div>
                <div className="form flex flex-col gap-10 max-w-sm md:max-w-2xl">
                    {/* Name */}
                    <FormControl isRequired isInvalid={nameInvalid}>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>Parent Name</FormLabel>
                        <Input onChange={(e) => setNameInput(e.target.value)}/>
                    </FormControl>
                    {/* Child's Name */}
                    <FormControl isRequired isInvalid={patientNameInvalid}>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>Patient's Name</FormLabel>
                        <Input onChange={(e) => setPatientNameInput(e.target.value)} />
                    </FormControl>
                    {/* Child's Id */}
                    <FormControl isRequired isInvalid={patientIdInvalid}>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>Patient's ID</FormLabel>
                        <Input onChange={(e) => setPatientId(e.target.value)}/>
                    </FormControl>
                    {/* Rating for treatment */}
                    <FormControl isRequired>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>Rating for treatment</FormLabel>
                        <RadioRating ratingType={"number"} setValue={setRatingOfTreatment} />
                    </FormControl>
                    {/* Commets / Explaination of behaviour of child */}
                    <FormControl isRequired isInvalid={behaviourOfChildInvalid}>
                        <FormLabel fontWeight={"bold"} fontSize={"xl"}>Behaviour of Patient (better or worse)</FormLabel>
                        <Textarea height={"200px"} onChange={(e) => setBehaviourOfChild(e.target.value)} />
                    </FormControl>
                    {error && <Text className="text-red-500 font-bold">{error}</Text>}
                    <Button type="Submit" onClick={handleSubmit} colorScheme="Yellow">Submit</Button>
                </div>
            </div>
        </section>
    ) : (
            <div>
                <LoadingSpinnerOverLay loading={loading} />        
            </div>
    )
}