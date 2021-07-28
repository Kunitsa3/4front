import { useHistory } from 'react-router-dom';

export const API_ROUTES = {
  published: 'published',
};

export const useFetchData = () => {
  const history = useHistory();

  return async (route, data) => {
    const token = JSON.parse(localStorage.getItem('authToken'));
    const result = await fetch('https://itr4back.herokuapp.com/api/users/' + route, {
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
};
