import {
    Tr,
    Td,
    Tooltip,
    IconButton,
    Divider,
    useDisclosure
} from '@chakra-ui/react'
import {
    FiDownload, FiDelete
} from 'react-icons/fi'
import { DeleteFileAlert } from './DeleteFileAlert';
  
export const FileTr = ({name, date, time, chave}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDownload = (e) => {
      e.preventDefault();
  
      fetch('/dataset/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name": name})
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
      })
    }

    return (
      <Tr>
        <Td>{name}</Td>
        <Td>{date} {time}</Td>
        <Td>
        <Tooltip label="Download arquivo">
          <IconButton
          colorScheme='teal'
          aria-label='Download arquivo'
          size='xs'
          icon={<FiDownload />}
          onClick={ handleDownload }
          />
        </Tooltip>
        <> </>
        <Tooltip label="Delete arquivo">
          <IconButton
          colorScheme='teal'
          aria-label='Delete arquivo'
          size='xs'
          icon={<FiDelete />}
          onClick={onOpen}
          />
        </Tooltip>
        <DeleteFileAlert open={isOpen} close={onClose} name={name} chave={chave}/>
        </Td>
      </Tr>
    );
}