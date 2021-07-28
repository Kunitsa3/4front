import { useEffect, useState } from 'react';
import { useFetchData } from '.';

const useGetUsersList = () => {
  const fetchData = useFetchData();

  return async () => await (await fetchData('list', { method: 'GET' })).json();
};

const useBlockSelectedUsers = () => {
  const fetchData = useFetchData();

  return async keys =>
    await (
      await fetchData('blockUsers', {
        method: 'POST',
        body: JSON.stringify({ keys }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    ).json();
};

const useActivateSelectedUsers = () => {
  const fetchData = useFetchData();

  return async keys =>
    await (
      await fetchData('activateUsers', {
        method: 'POST',
        body: JSON.stringify({ keys }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    ).json();
};

const useDeleteSelectedUsers = () => {
  const fetchData = useFetchData();

  return async keys =>
    await (
      await fetchData('deleteUsers', {
        method: 'POST',
        body: JSON.stringify({ keys }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    ).json();
};

export const useUsersList = () => {
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState();
  const [checkedUsers, setCheckedUsers] = useState([]);
  const a = useGetUsersList();
  const b = useBlockSelectedUsers();
  const c = useActivateSelectedUsers();
  const d = useDeleteSelectedUsers();

  useEffect(() => {
    const fetchList = async () => {
      setUsersList(await a());
      setLoading(false);
    };

    setLoading(true);
    fetchList();
  }, []);

  const blockUsers = async () => {
    setUsersList(await b(checkedUsers));
    setCheckedUsers([]);
  };

  const activateUsers = async () => {
    setUsersList(await c(checkedUsers));
    setCheckedUsers([]);
  };

  const deleteUsers = async () => {
    setUsersList(await d(checkedUsers));
    setCheckedUsers([]);
  };

  return { usersList, loading, blockUsers, checkedUsers, setCheckedUsers, activateUsers, deleteUsers };
};
