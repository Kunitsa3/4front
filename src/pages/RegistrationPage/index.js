import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRegisterUser } from '../../controller/registerUser';
import { useEffect } from 'react';

const RegistrationPage = () => {
  const history = useHistory();
  const { register: registerAction } = useRegisterUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.removeItem('authToken');
  }, []);

  const onSubmit = data => registerAction(data);

  const onRegistrationClick = () => history.push('login');

  return (
    <div className="wrapper">
      <p className="title">Register</p>
      <Button variant="secondary" onClick={onRegistrationClick} className="navigation-link">
        Go to login
      </Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register('email', {
              required: true,
            })}
            isInvalid={!!errors?.email}
          />
          <Form.Control.Feedback type="invalid">Please enter valid email</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password', {
              required: true,
            })}
            isInvalid={!!errors?.password}
          />
          <Form.Control.Feedback type="invalid">Please enter password</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            {...register('name', {
              required: true,
            })}
            isInvalid={!!errors?.name}
          />
          <Form.Control.Feedback type="invalid">Please enter name</Form.Control.Feedback>
        </Form.Group>
        <div className="button-wrapper-registration">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationPage;
