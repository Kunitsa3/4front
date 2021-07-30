import { useHistory } from 'react-router-dom';
import { useFetchData } from '.';
import { useState } from 'react';

export const useLoginUser = () => {
  const history = useHistory();
  const fetchData = useFetchData();
  const [errors, setErrors] = useState(undefined);

  const login = async body => {
    try {
      const tokenResponse = await fetchData('login', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const token = await tokenResponse.json();
      localStorage.setItem('authToken', JSON.stringify(token));
      history.push('list');
    } catch (e) {
      setErrors(e.message);
    }
  };

  return { login, errors };
};
