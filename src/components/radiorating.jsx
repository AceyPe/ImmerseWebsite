import React from 'react';
import {
    Radio,
    RadioGroup,
    HStack,
} from '@chakra-ui/react'

export const RadioRating = ({ ratingType, setValue }) => {
    
    return ratingType === "number" ? (
        <RadioGroup onChange={setValue}>
                <div className='flex flex-wrap gap-6'>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="1">1</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="2">2</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="3">3</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="4">4</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="5">5</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="6">6</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="7">7</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="8">8</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="9">9</Radio>
                    <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="10">10</Radio>
                </div>
        </RadioGroup>
    ) : ratingType === "stress" ? (
            <RadioGroup onChange={setValue}>
            <div className='flex flex-wrap gap-6'>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="no stress">no stress</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="minimal">minimal</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="mild">mild</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="noticeable">noticeable</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="moderate">moderate</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="elvated">elvated</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="high">high</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="very high">very high</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="extreme">extreme</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="overwhelmed">overwhelmed</Radio>
            </div>
        </RadioGroup>
    ) : ratingType === "feel" ? (
            <RadioGroup onChange={setValue}>
            <div className='flex flex-wrap gap-6'>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="miserable">miserable</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="very bad">very bad</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="bad">bad</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="frustrated">frustrated</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="neutral">neutral</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="slightly good">slightly good</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="good">good</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="very good">very good</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="excellent">excellent</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="perfect">perfect</Radio>
            </div>
        </RadioGroup>
            ) : ratingType === "role" ? (
                    <RadioGroup onChange={setValue}>
                        <div className='flex flex-wrap gap-6'>
                            <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="patient">Patient</Radio>
                            <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="parent">Parent</Radio>
                            <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="therapist">Therpaist</Radio>
                        </div>
                    </RadioGroup>
            ) : (
            <RadioGroup onChange={setValue}>
            <HStack spacing={"30px"}>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="no everything is good">no everything is good</Radio>
                <Radio className="hover:!border-yellow-500 focus:!border-yellow-500" colorScheme="Yellow" value="yes I am struggling with something">yes I am struggling with something</Radio>
            </HStack>
        </RadioGroup>
    )
}