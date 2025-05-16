import React from "react";
import {
    Spinner,
    Modal,
    ModalContent,
    ModalBody,
    Text
} from "@chakra-ui/react";

export const LoadingSpinnerOverLay = ({ loading }) => {
    return (
        <Modal isOpen={loading} size="full">
            <ModalContent
                maxW="100vw"
                minH="100vh"
                bg="rgba(0, 0, 0, 0.7)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="none"
            >
                <ModalBody className='flex flex-col items-center justify-center gap-4'>
                    <Spinner size="xl" color="white" />
                    <Text color="white">Please wait...</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};