import { history } from '../App';

export const API_ROUTES = {
  published: 'published',
};

export const fetchData = async (route, data) => {
  console.log(process.env);
  console.log(process.env.API_ROUTE);
  const token = JSON.parse(localStorage.getItem('authToken'));
  const result = await fetch(process.env.API_ROUTE + '/api/users/' + route, {
    ...data,
    headers: {
      ...data.headers,
      authorization: token,
    },
  });

  if (result.status === 403) {
    localStorage.removeItem('authToken');
    history.push('login');
  }

  return result;
};
