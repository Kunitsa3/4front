import Form from 'react-bootstrap/Form';
import { format } from 'date-fns';
import { memo } from 'react';

const formatDate = date => format(new Date(date), 'dd/MM/yyyy');

const ListItem = ({ id, onCheckClick, checked, name, email, registerDate, lastLoginDate, status }) => {
  return (
    <tr>
      <td>
        <Form.Check
          inline
          type={'checkbox'}
          onChange={({ target: { value } }) => onCheckClick(value)}
          checked={checked}
          value={id}
        />
      </td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{formatDate(registerDate)}</td>
      <td>{formatDate(lastLoginDate)}</td>
      <td>{status}</td>
    </tr>
  );
};

export default memo(ListItem);
