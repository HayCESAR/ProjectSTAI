import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Flex,
  } from '@chakra-ui/react'
import { UsersList } from './UsersList';
  
export const UsersTable = ({users})  => {

    return(
        <Flex overflow="auto">
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                        <Th>Usuário</Th>
                        <Th>Permissões</Th>
                        <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <UsersList users={users} />
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    );
}