import React from "react";
import { Accordion, Row } from "react-bootstrap";
import DriverCard from "./DriverCard";

function TeamAccordion({ teamName, driversList }) {
  return (
    <Accordion.Item eventKey={teamName}>
      <Accordion.Header>{teamName}</Accordion.Header>
      <Accordion.Body>
        <Row xs={1} md={4} className="g-4">
          {driversList.map((driver) => (
            <DriverCard driverStats={driver} key={driver.driver.name} />
          ))}
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default TeamAccordion;
