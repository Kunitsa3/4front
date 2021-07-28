import { useHistory } from 'react-router-dom';
import { useFetchData } from '.';

export const useRegisterUser = () => {
  const history = useHistory();
  const fetchData = useFetchData();

  const register = async body => {
    const token = await (
      await fetchData('register', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    ).json();
    localStorage.setItem('authToken', JSON.stringify(token));
    history.push('list');
  };

  return { register };
};
