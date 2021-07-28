import UserList from '../pages/UserList';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import { AuthorizedRoute } from '../components/AuthorizedRoute';
import { Redirect } from 'react-router-dom';

export const routes = [
  {
    path: '/login',
    component: LoginPage,
    exact: true,
    authorizedOnly: false,
  },
  {
    path: '/list',
    component: UserList,
    exact: true,
    authorizedOnly: true,
  },
  {
    path: '/register',
    component: RegistrationPage,
    exact: true,
    authorizedOnly: false,
  },
  {
    path: '/*',
    is404: true,
  },
];

export const renderRoutes = () =>
  routes.map(({ is404, ...route }) => {
    const routeProps = {
      ...route,
      key: route.path?.toString(),
    };

    if (is404) {
      return <Redirect to="login" />;
    }

    return <AuthorizedRoute {...routeProps} />;
  });
