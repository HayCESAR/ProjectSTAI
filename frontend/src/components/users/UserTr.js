import {
    Tr,
    Td,
    IconButton,
    Divider,
    useDisclosure,
    Tooltip,
    Badge
} from '@chakra-ui/react'
import {
    FiPlus
} from 'react-icons/fi'
import { PermissionsList } from './PermissionsList';
import { AddPermissionsModal } from './AddPermissionsModal';
  
export const UserTr = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
        <Tr>
            <Td>{user.email}</Td>
            <Td>
                <PermissionsList email={user.email} permissoes={user.permissoes}/>

                <Tooltip label="Adicionar permissão">
                <IconButton
                colorScheme='teal'
                aria-label='Call Segun'
                size='xs'
                icon={<FiPlus />}
                onClick={onOpen}
                />
                </Tooltip>
                <AddPermissionsModal open={isOpen} close={onClose} email={user.email}/>
            </Td>
            <Td>{user.active ? 
                    (<Badge colorScheme='green'>Ativo</Badge>)
                : 
                    (<Badge colorScheme='red'>Desativado</Badge>)
                }
            </Td>
        </Tr>
        <Divider />
        </>
    );
}