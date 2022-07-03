import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function ResultsFilter({
  seasonYears,
  seasonSelection,
  radioSelection,
  seasonChangeHandler,
  radioChangeHandler,
  getResultsHandler,
}) {
  return (
    <Form onSubmit={getResultsHandler}>
      <InputGroup>
        <Form.Select
          aria-label="season select"
          onChange={seasonChangeHandler}
          value={seasonSelection}
        >
          <option>Select a season</option>
          {seasonYears.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </Form.Select>
        <Button type="submit" variant="outline-secondary" id="button-addon2">
          Get Results
        </Button>
      </InputGroup>
      <InputGroup onChange={radioChangeHandler} value={radioSelection}>
        <Form.Check
          inline
          type={"radio"}
          id={"driverOpt"}
          label={"Drivers"}
          name={"stats-type"}
          value={"drivers"}
          defaultChecked
        />
        <Form.Check
          inline
          type={"radio"}
          id={"teamOpt"}
          label={"Teams"}
          name={"stats-type"}
          value={"teams"}
        />
      </InputGroup>
    </Form>
  );
}

export default ResultsFilter;
