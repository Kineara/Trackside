import React from 'react';
import Accordion from "react-bootstrap/Accordion";


function eventSessions({sessionInfo}) {
    const renderedSessions = sessionInfo.map((session) => {
        return (
            <Accordion.Item eventKey={session.id} key={session.id}>
                <Accordion.Header>{session.type}</Accordion.Header>
                <Accordion.Body>
                    <p><b>Session Info:</b></p>
                    <p><em>Date:</em> {session.date.slice(0,10)}</p>
                    <p><em>Time (UTC):</em> {session.date.slice(11,16)}</p>
                    <p><em>Status:</em> {session.status}</p>
                </Accordion.Body>
            </Accordion.Item>
        )
    })

    return (
        <Accordion>
            {renderedSessions}
        </Accordion>
    )
}

export default eventSessions;