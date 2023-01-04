import {
    Box,
    Input,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import {
    FiPlus
} from 'react-icons/fi'
import React, { useState } from "react";
  
export const NewUserBox = ()  => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [email, setEmail] = useState("");

    const handleAddUser = (e) => {
        e.preventDefault();
        
        fetch('users/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        }).then(res => {
            if (!res.ok){
            console.log('problem');
            return;
            }
            return res.json();
        }).then(data => {
            console.log(data.message);
        }).catch(error => {
            console.log(error);
        });
        onClose();
    }

    return(
        <Box>
            <Button leftIcon={<FiPlus />} colorScheme='teal' onClick={onOpen}>
                Novo usuário
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Novo usuário</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input name='email' placeholder='E-mail' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </ModalBody>

                <ModalFooter>
                    <Button variant='ghost' onClick={onClose}>Cancelar</Button>
                    <Button colorScheme='blue' mr={3} onClick={handleAddUser}>
                    Adicionar
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}