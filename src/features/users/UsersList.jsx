import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import { loadUsersAsync, selectUsers } from './usersSlice';

export default function UsersList() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersAsync());
  }, []);

  return (
    <div>
      {users.map((userData) => (
        <User {...userData} />
      ))}
    </div>
  );
}
