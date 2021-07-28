import { useEffect, useState } from 'react';
import { fetchData } from '.';

const getUsersList = async () => await (await fetchData('list', { method: 'GET' })).json();

const blockSelectedUsers = async keys =>
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

const activateSelectedUsers = async keys =>
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

const deleteSelectedUsers = async keys =>
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

export const useUsersList = () => {
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState();
  const [checkedUsers, setCheckedUsers] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      setUsersList(await getUsersList());
      setLoading(false);
    };

    setLoading(true);
    fetchList();
  }, []);

  const blockUsers = async () => {
    setUsersList(await blockSelectedUsers(checkedUsers));
    setCheckedUsers([]);
  };

  const activateUsers = async () => {
    setUsersList(await activateSelectedUsers(checkedUsers));
    setCheckedUsers([]);
  };

  const deleteUsers = async () => {
    setUsersList(await deleteSelectedUsers(checkedUsers));
    setCheckedUsers([]);
  };

  return { usersList, loading, blockUsers, checkedUsers, setCheckedUsers, activateUsers, deleteUsers };
};
