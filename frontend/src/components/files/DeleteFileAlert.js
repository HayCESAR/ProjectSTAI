import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react'
import { useRef, useState, useDisclosure } from "react";
  
export const DeleteFileAlert = ({open, close, name, chave}) => {  
  const cancelRef = useRef()

  const handleDelete = (e) => {
    e.preventDefault();

    fetch('/dataset', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"filename": name, "key": chave})
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
            Deletar Arquivo
            </AlertDialogHeader>

            <AlertDialogBody>
            Tem certeza que deseja deletar este arquivo de dados?
            </AlertDialogBody>

            <AlertDialogFooter>
            <Button ref={cancelRef} onClick={close}>
                Cancelar
            </Button>
            <Button colorScheme='red' onClick={handleDelete} ml={3}>
                Deletar
            </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
  );
}