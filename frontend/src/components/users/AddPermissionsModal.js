import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ButtonGroup,
} from '@chakra-ui/react'
import React, { useState } from 'react';
  
export const AddPermissionsModal = ({open, close, email}) => {
    
    const handleAddPermission = (e) => {
        e.preventDefault();
        const permissao = e.currentTarget.id;
        
        fetch('users/addPermisssion', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, permissao})
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
        close();
    }

    return (
        <Modal isOpen={open} onClose={close} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Adicionar Permissão</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <ButtonGroup >
                    <Button id='asia' onClick={handleAddPermission}>Ásia</Button>
                    <Button id='africa' onClick={handleAddPermission}>África</Button>
                    <Button id='oceania' onClick={handleAddPermission}>Oceania</Button>
                </ButtonGroup>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}