import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { useCallback } from 'react';
import './styles.css';

import ListItem from './components/ListItem';

const UserTable = ({ usersList, loading, checkedUsers, setCheckedUsers }) => {
  const onCheckClick = useCallback(id => {
    setCheckedUsers(oldChecked =>
      oldChecked.find(el => id === el) ? oldChecked.filter(el => el !== id) : [...oldChecked, id],
    );
  }, []);

  const onAllClick = () => {
    setCheckedUsers(oldChecked => (oldChecked.length === usersList.length ? [] : usersList.map(({ id }) => id)));
  };

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>
            <Form.Check
              inline
              type={'checkbox'}
              label={checkedUsers.length !== usersList.length ? 'Check all' : 'Uncheck all'}
              onChange={onAllClick}
              checked={checkedUsers.length === usersList.length}
            />
          </th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Registration date</th>
          <th>Last login date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {usersList.map(({ email, id, lastLoginDate, name, createdAt, status }) => (
          <ListItem
            checked={checkedUsers.find(el => id === el) || false}
            email={email}
            id={id}
            lastLoginDate={lastLoginDate}
            name={name}
            onCheckClick={onCheckClick}
            registerDate={createdAt}
            status={status}
            key={id}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
