import { useHistory } from 'react-router-dom';
import { fetchData } from '.';

export const useLoginUser = () => {
  const history = useHistory();

  const login = async body => {
    const token = await (
      await fetchData('login', {
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

  return { login };
};
