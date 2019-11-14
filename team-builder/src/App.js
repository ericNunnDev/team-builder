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
      role: 'A complex combination of molecules working together to make a conscious, carbon-based lifeform that my ego calls "I".'
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

  const deleteFriend = friendId => {
    const friendList = [...friends];
    for(let i = 0; i < friendList.length; i++) {
      if (friendList[i].id === friendId) {
        friendList.pop(i);
      }
    }
    setFriends(friendList);
  }

  return (
    <div className='App'>
      <h1>Team Builder</h1>
      <FriendForm addNewFriend={addNewFriend} />
      <Friends deleteFriend={deleteFriend} friends={friends} />
    </div>
  );
}

export default App;
