import React, { Component , Fragment} from 'react';
import UserItem from './UserItem'

const User = ({users}) =>{

        return (
            <div  className = "row">
                    {users.map(user => (
                            <UserItem key={user.id} user = {user} />
                     ))}

            </div>
        )
}


export default User
