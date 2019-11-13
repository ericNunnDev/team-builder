import React, { useState } from 'react';

const FriendForm = props => {
    const [friend, setFriend] = useState({ name: '', email: '', role: '' });

    const handleChanges = e => {
        setFriend({ ...friend, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewFriend(friend);
        setFriend({ name: '', email: '', role: '' });
    };

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    Name: 
                    <input
                      id='name'
                      type='text'
                      name='name'
                      onChange={handleChanges}
                      value={friend.name} 
                    />
                </label>
                <label htmlFor='email'>
                    Email: 
                    <input
                      id='email'
                      type='email'
                      name='email'
                      onChange={handleChanges}
                      value={friend.email} 
                    />
                </label>
                <label htmlFor='role'>
                    Role: 
                    <input
                      id='role'
                      type='text'
                      name='role'
                      onChange={handleChanges}
                      value={friend.role} 
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default FriendForm;