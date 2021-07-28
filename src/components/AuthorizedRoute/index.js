import { Redirect, Route } from 'react-router-dom';

export const AuthorizedRoute = ({ authorizedOnly, key, ...props }) => {
  const token = JSON.parse(localStorage.getItem('authToken'));

  if (!authorizedOnly) {
    return <Route {...props} key={key} />;
  }

  return token ? <Route {...props} key={key} /> : <Redirect to="login" key={key} />;
};
