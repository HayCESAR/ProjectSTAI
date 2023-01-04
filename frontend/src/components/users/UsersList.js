import { UserTr } from './UserTr';
  
export const UsersList = ({users})  => {

    return users.map(user => (
        <UserTr user={user} />
    ));
}