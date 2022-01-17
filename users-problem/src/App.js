import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios
      .get('https://randomuser.me/api/?results=50')
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((e) => {
        console.error();
      });
  };

  const displayUsers = users.map((user, index) => {
    return (
      <div key={index}>
        <p>{user.name.first}</p>
        <p>{user.phone}</p>
        <img src={user.picture.thumbnail}></img>
      </div>
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  return <div className='App'>{displayUsers}</div>;
}

export default App;
