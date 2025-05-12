import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);
    
    return (
        <div>
            {
                users.map(user => 
                    <p key={user.id}>{user.name}, {user.email}</p>
                )
            }
        </div>
    );
};

export default Users;