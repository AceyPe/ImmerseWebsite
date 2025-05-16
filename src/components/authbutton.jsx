import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AuthButton = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleClick = async () => {
        if (user) {
            await logout();
        } else {
            navigate('/signin'); // or '/login' — wherever your sign-in page is
        }
    };

    return (
        <Button colorScheme="lightOrange" size={"lg"} borderRadius={"full"} onClick={handleClick} className='size-40'>
            {user ? 'Sign Out' : 'Sign In'}
        </Button>
    );
};

export default AuthButton;
