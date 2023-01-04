import {
    Tag,
    TagLabel,
    TagCloseButton,
    useDisclosure,
    Tooltip
} from '@chakra-ui/react'
import { RemovePermissionAlert } from './RemovePermissionAlert'
  
export const PermissionTag = ({email, tagname}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Tag>
            <TagLabel>{tagname}</TagLabel>
            <Tooltip label="Remover permissão">
                <TagCloseButton onClick={onOpen}/>
            </Tooltip>
            <RemovePermissionAlert open={isOpen} close={onClose} email={email} permissao={tagname}/>
        </Tag>
    );
}