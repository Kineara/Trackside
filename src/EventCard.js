import React from 'react';
import Card from 'react-bootstrap/Card'

function EventCard( {event} ) {
    return (
        <Card style={{ width: '200px' }}>
            <Card.Header>{event.date.slice(0,10)}</Card.Header>
            <Card.Img variant="top" src={event.circuit.image} />
            <Card.Title>{event.competition.name}</Card.Title>
        </Card>
    )
}

export default EventCard;