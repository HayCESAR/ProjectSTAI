import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react'
import { useRef } from "react";
  
export const RemovePermissionAlert = ({open, close, email, permissao}) => {
    const cancelRef = useRef()


    const handleRemovePermission = () => {
        console.log({email, permissao})
        
        fetch('users/removePermission', {
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
        <AlertDialog
        isOpen={open}
        leastDestructiveRef={cancelRef}
        onClose={close}
        isCentered
        >
            <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Remover Permissão
                </AlertDialogHeader>

                <AlertDialogBody>
                Tem certeza que deseja remover esta permissão do usuário?
                </AlertDialogBody>

                <AlertDialogFooter>
                <Button ref={cancelRef} onClick={close}>
                    Cancelar
                </Button>
                <Button colorScheme='red' onClick={handleRemovePermission} ml={3}>
                    Remover
                </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}