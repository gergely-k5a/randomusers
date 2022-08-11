import axios from 'axios';

export function fetchUsers(page = 1) {
  return axios.get(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );
}
