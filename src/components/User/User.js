import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import Team from '../Team/Team';


const User = () => {
    const [users, setUsers] = useState([]);
    const [team, setTeam] = useState([]);
    const handleAddToTeam = (users) => {
        const newTeam = [...team, users];
        setTeam(newTeam);
        // console.log('added to team', users);
    }
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <Team team={team}></Team>
            <div>
                {
                    users.map(user => <Data user={user} key={user.cell}  handleAddToTeam={handleAddToTeam} ></Data>)
                }
            </div>
        </div>
    );
};

export default User;