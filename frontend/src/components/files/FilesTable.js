import {
    Table,
    Tbody,
    TableContainer,
    Flex,
  } from '@chakra-ui/react'
import { FilesList } from './FilesList';
  
export const FilesTable = ({files})  => {

    return(
        <Flex overflow="auto">
            <TableContainer>
                <Table variant='simple'>
                    <Tbody>
                        <FilesList files={files} />
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    );
}