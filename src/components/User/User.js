import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';


const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            {
                users.map(user => <Data user={user} key={user.cell} ></Data>)
            }
        </div>
    );
};

export default User;