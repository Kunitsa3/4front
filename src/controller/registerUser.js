import { useHistory } from 'react-router-dom';
import { useFetchData } from '.';
import { useState } from 'react';

export const useRegisterUser = () => {
  const history = useHistory();
  const fetchData = useFetchData();
  const [errors, setErrors] = useState(undefined);

  const register = async body => {
    try {
      const tokenResponse = await fetchData('register', {
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

  return { register, errors };
};
