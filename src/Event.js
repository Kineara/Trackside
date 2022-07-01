import React from 'react';
import Accordion from "react-bootstrap/Accordion";


function Event({individualEvent}) {
    return (
        <Accordion.Item eventKey={individualEvent.id}>
            <Accordion.Header>{individualEvent.competition.name}</Accordion.Header>
            <Accordion.Body>
                <img src={individualEvent.circuit.image} />
                Lorem ipsum something or other ah fuck
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Event;