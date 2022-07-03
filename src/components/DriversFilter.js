import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function DriversFilter({
  seasonYears,
  seasonValue,
  seasonChangeHandler,
  getDriversHandler,
}) {
  return (
    <Form onSubmit={getDriversHandler}>
      <InputGroup>
        <Form.Select
          aria-label="season select"
          onChange={seasonChangeHandler}
          value={seasonValue}
        >
          <option>Select a season</option>
          {seasonYears.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </Form.Select>
        <Button type="submit" variant="outline-secondary" id="button-addon2">
          Get Drivers
        </Button>
      </InputGroup>
    </Form>
  );
}

export default DriversFilter;
