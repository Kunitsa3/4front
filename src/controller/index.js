import { useHistory } from 'react-router-dom';

export const API_ROUTES = {
  published: 'published',
};

export const useFetchData = () => {
  const history = useHistory();

  return async (route, data) => {
    try {
      const token = JSON.parse(localStorage.getItem('authToken'));
      const result = await fetch('http://localhost:8080/api/users/' + route, {
        ...data,
        headers: {
          ...data.headers,
          authorization: token,
        },
      });

      // console.log(result, 'FETCH_RESULT');

      if (result.status === 400) {
        throw await result.json();
      }
      // console.log(await result.json(), 'FETCH_RESULT');

      if (result.status === 403) {
        localStorage.removeItem('authToken');
        history.push('login');
      }

      return result;
    } catch (e) {
      throw e;
    }
  };
};
