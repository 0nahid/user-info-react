import React from 'react';

const Team = (props) => {
    const teams = props.team;
    console.log(teams.users);
    return (
        <div>
            this is team components
        </div>
    );
};

export default Team;