import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

const ToolBar = ({ blockUsers, activateUsers, deleteUsers }) => {
  return (
    <div className="toolbar">
      <Button variant="warning" className="button" onClick={blockUsers}>
        Block
      </Button>
      <Button variant="success" className="button" onClick={activateUsers}>
        Unblock
      </Button>
      <Button variant="danger" className="button" onClick={deleteUsers}>
        Delete
      </Button>
    </div>
  );
};

export default memo(ToolBar);
