import React from 'react';
import Card from 'react-bootstrap/Card'


function DriverCard({driverStats}) {
    return (
        <Card border="primary">
        <Card.Img variant="top" src={driverStats.driver.image} />
        <Card.Title>{driverStats.driver.name}</Card.Title>
        <Card.Body></Card.Body>
    </Card>
    )
}

export default DriverCard;