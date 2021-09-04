import React from 'react';

const Team = (props) => {
    console.log(props.team);
    const team = props.team;
    const { email } = props.team;
    // const name = `${team.name.first} ${team.name.last}`;
    return (
        <div>
            this is team components {team.length} & {email}

        </div>
    );
};

export default Team;