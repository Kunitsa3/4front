import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styles.css';
import { useForm } from 'react-hook-form';

import { useLoginUser } from '../../controller/loginUser';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const history = useHistory();
  const { login } = useLoginUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.removeItem('authToken');
  }, []);

  const onSubmit = data => login(data);

  const onRegistrationClick = () => history.push('register');

  return (
    <div className="wrapper">
      <p className="title">Log in</p>
      <Button variant="secondary" onClick={onRegistrationClick} className="navigation-link">
        Go to registration
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
        <div className="button-wrapper-login">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
