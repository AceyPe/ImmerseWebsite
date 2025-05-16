import React,{ useEffect, useState } from "react"
import { RadioRating } from '../components/radiorating'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure,
    Text
} from '@chakra-ui/react'
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router"
import { submitForm } from "../api/api"
import { LoadingSpinnerOverLay } from "../components/loadingSpinnerOverlay"


export const FearAnalysisPage = () => {

    const [nameInput, setNameInput] = useState('');
    const [sessionIdInput, setSessionIdInput] = useState();
    const [reasonInput, setReasonInput] = useState('');
    const [rating, setRating] = useState('');
    const [feeling, setFeeling] = useState('');
    const [stressLevel, setStressLevel] = useState('');
    const [struggle, setStruggle] = useState('');
    const [sessionFeedback, setSessionFeedback] = useState('');


// Errors (invalids)
    const [error, setError] = useState("");
    const [nameInvalid, setNameInvalid] = useState(false);
    const [sessionIdInvalid, setSessionIdInvalid] = useState(false);
    const [ratingInvalid, setRatingInvalid] = useState(false);
    const [feelingInvalid, setFeelingInvalid] = useState(false);
    const [stressLevelInvalid, setStressLevelInvalid] = useState(false);
    const [struggleInvalid, setStruggleInvalid] = useState(false);
    const [sessionFeedbackInvalid, setSessionFeedBackInvalid] = useState(false);




    const navigate = useNavigate();
    const { onOpen } = useDisclosure();
    const { user, authLoading } = useAuth();
    const [loading, setLoading] = useState(false);
    
    
    useEffect(() => {
        if (!authLoading)
        {
            if ((user && user.role !== "patient") || !user) {
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
        const isSessionIdEmpty = !sessionIdInput;
        const isRatingEmpty = !rating;
        const isFeelingEmpty = !feeling;
        const isStressEmpty = !stressLevel;
        const isStruggleEmpty = !struggle;
        const isFeedbackEmpty = !sessionFeedback;

        setNameInvalid(isNameEmpty);
        setRatingInvalid(isRatingEmpty);
        setFeelingInvalid(isFeelingEmpty);
        setStressLevelInvalid(isStressEmpty);
        setStruggleInvalid(isStruggleEmpty);
        setSessionFeedBackInvalid(isFeedbackEmpty);
        setSessionIdInvalid(isSessionIdEmpty);


        if (
            isNameEmpty || isSessionIdEmpty || isRatingEmpty ||
            isFeelingEmpty || isStressEmpty || isStruggleEmpty || isFeedbackEmpty
        ) {
            setError("Please fill in all the required fields in the form!");
            setLoading(false);
            return;
        }

        const sessionIdRegix = /^\d+$/;
        const sanitizedName = sanitizeInput(nameInput);
        const sanitizedSessionId = sessionIdRegix.test(sessionIdInput) ? sessionIdInput : setError("session Id must be a number!");
        
            
        const sanitizedReason = sanitizeInput(reasonInput);
        const data = {
            patientId: user.id,
            sessionId: sanitizedSessionId,
            patientName: sanitizedName,
            rating: rating,
            ratingReason: sanitizedReason,
            feeling: feeling,
            stressLevel: stressLevel,
            struggle: struggle,
            sessionFeedback: sessionFeedback
        }

        try {
            const response = await submitForm(data, 'patient');
            console.log(response);
        } catch (err) {
            setError("Something went wrong try again");
        } finally {
            setLoading(false);
        }

        setLoading(false);

    }

    return !loading? (
        <div className="form-wrapper flex flex-col gap-10 py-20 items-center text-white">
            <div className="title flex flex-col gap-4 text-center px-10">
                <h1 className="text-center text-primary text-4xl font-bold ">Fear Analysis Form </h1>
                <h2 className="text-2xl">this form will help us keep track of how the treatment is going before and after each session</h2>
            </div>
            <div className="form flex flex-col gap-10">
                {/* Name */}
                <FormControl isRequired isInvalid={nameInvalid}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Name</FormLabel>
                    <Input className="!border-white text-white hover:!border-yellow-500 focus:!border-yellow-500" onChange={(e) => setNameInput(e.target.value)} px={40} />
                </FormControl>

                <FormControl isRequired isInvalid={sessionIdInvalid}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Session Id (refer to the therapist)</FormLabel>
                    <Input className="!border-white text-white hover:!border-yellow-500 focus:!border-yellow-500" onChange={(e) => setSessionIdInput(e.target.value)} />
                </FormControl>

                <FormControl isRequired isInvalid={ratingInvalid}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Rating of the experience</FormLabel>
                    <RadioRating ratingType="number" setValue={setRating} />
                </FormControl>

                <FormControl>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Reason for the rating?</FormLabel>
                    <Input className="!border-white text-white hover:!border-yellow-500 focus:!border-yellow-500" onChange={(e) => setReasonInput(e.target.value)} />
                </FormControl> 

                <FormControl isRequired isInvalid={feelingInvalid}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>How are you feeling at this moment? (Check in with your breathing, muscles that may be tense, and your thoughts)</FormLabel>
                    <RadioRating setValue={setFeeling} />
                </FormControl>

                <FormControl isRequired isInvalid={stressLevelInvalid}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>How stressful are you? (1 being not anxious at all and 10 having the highest level of distress)</FormLabel>
                    <RadioRating ratingType="stress" setValue={setStressLevel} />
                </FormControl>

                <FormControl isRequired isInvalid={struggleInvalid}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>Did you struggle with anything in our session today?</FormLabel>
                    <RadioRating setValue={setStruggle} />
                </FormControl>

            <FormControl isRequired isInvalid={sessionFeedbackInvalid}>
                    <FormLabel fontWeight={"bold"} fontSize={"xl"}>How do you feel about today's session went?</FormLabel>
                    <RadioRating ratingType={"feel"} setValue={setSessionFeedback} />
                </FormControl>
                    {error && <Text className="text-red-500 font-bold">{error}</Text>}

            <Button type="Submit" onClick={handleSubmit}>Submit</Button>
        </div>
        </div>
    ) : (
        <div>
            <LoadingSpinnerOverLay loading={loading}/>      
        </div>
    )
}