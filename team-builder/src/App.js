import React, { useState } from 'react';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import './styles/App.scss';

function App() {
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: 'Eric Nunn',
      email: 'e.nunn1009@gmail.com',
      role: 'I am me.'
    }
  ]);

  const addNewFriend = friend => {
    const newFriend = {
      id: Date.now(),
      name: friend.name,
      email: friend.email,
      role: friend.role
    };
    setFriends([...friends, newFriend]);
  };

  return (
    <div className='App'>
      <h1>Team Builder</h1>
      <FriendForm addNewFriend={addNewFriend} />
      <Friends friends={friends} />
    </div>
  );
}

export default App;
