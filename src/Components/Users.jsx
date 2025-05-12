import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    const handleAddData = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};

        // Post Data
        fetch('http://localhost:3000/users',
            {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(user)
            }
        )
        .then(res => res.json())
        .then(data => console.log("After Post Data = ", data)
        )
        
    };
    
    return (
        <div>
            <form onSubmit={handleAddData}>
                <input type="text" name='name' placeholder='Name' /><br /><br />
                <input type="email" name='email' placeholder='Email' /><br /><br />
                <input type="submit" value="Submit" />
            </form>

            {
                users.map(user => 
                    <p key={user.id}>{user.name}, {user.email}</p>
                )
            }
        </div>
    );
};

export default Users;