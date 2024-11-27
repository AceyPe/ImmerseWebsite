import React from 'react';
import
{
    Radio,
    RadioGroup,
    HStack,
    
} from '@chakra-ui/react'

export const RadioRating = () => {
    return (
        <RadioGroup>
            <HStack spacing={"30px"}>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="1">1</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy"  value="2">2</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="3">3</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="4">4</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="5">5</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="6">6</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="7">7</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="8">8</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="9">9</Radio>
                <Radio className="!border-primary hover:!border-black" colorScheme="navy" value="10">10</Radio>
            </HStack>
        </RadioGroup>
    )
}