import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const Data = (props) => {
    // console.log(props.user);
    const { email, picture: { large: img } } = props.user;
    const user = props.user;
    const name = `${user.name.first} ${user.name.last}`;
    const handleAddToTeam = props.handleAddToTeam;
    return (
        <Row className="justify-content-md-center">
            <Col xs lg="8">
                <h1>Name: {name}</h1>
                <p>{email}</p>
                <img src={img} alt="" />
                <Button onClick={() => handleAddToTeam(props.user)} >Click</Button>
            </Col>
        </Row>
    );
};

export default Data;