import { Redirect, Route } from 'react-router-dom';

export const AuthorizedRoute = ({ authorizedOnly, ...props }) => {
  const token = JSON.parse(localStorage.getItem('authToken'));

  if (!authorizedOnly) {
    return <Route {...props} />;
  }

  return token ? <Route {...props} /> : <Redirect to="login" />;
};
