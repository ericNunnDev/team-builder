import React from 'react';

const Friends = props => {
    return ( 
        <div className='friend-card'>
            {props.friends.map(friend => (
                <div className='friend' key={friend.id}>
                <button className='delete-btn' onClick={() => props.deleteFriend(friend.id)}>X</button>
                <h2>{friend.name}</h2>
                <p>{friend.email}</p>
                <p>{friend.role}</p>
                <hr />
                </div>
            ))}
        </div>
     );
};
 
export default Friends;