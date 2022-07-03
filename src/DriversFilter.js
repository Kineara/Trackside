import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function DriversFilter({seasonYears, seasonValue, seasonChangeHandler, getDriversHandler}) {
  return (
    <Form 
    onSubmit={getDriversHandler}
    >
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
