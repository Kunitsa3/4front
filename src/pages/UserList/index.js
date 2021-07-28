import UserTable from '../../components/UserTable';
import { useUsersList } from '../../controller/getUsersList';
import ToolBar from '../../components/ToolBar';

const UserList = () => {
  const { usersList, loading, blockUsers, checkedUsers, setCheckedUsers, activateUsers, deleteUsers } = useUsersList();

  return (
    <div>
      <ToolBar blockUsers={blockUsers} activateUsers={activateUsers} deleteUsers={deleteUsers} />
      <UserTable
        usersList={usersList}
        loading={loading}
        checkedUsers={checkedUsers}
        setCheckedUsers={setCheckedUsers}
      />
    </div>
  );
};

export default UserList;
