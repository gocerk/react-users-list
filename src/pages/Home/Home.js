import { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';

export default function App() {
  let [users, setUsers] = useState([]);
  // eslint-disable-next-line
  useEffect(() => {
    const getUsers = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json();
      setUsers(data);
    };

    getUsers();
    // console.log(users);
    // eslint-disable-next-line
  }, []);  

  return (
    <UserCard user={users[0]}/>
  )
}