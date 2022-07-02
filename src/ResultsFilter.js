import React, { useEffect, useState } from "react";
import selectableYears from "./testData/selectableYears";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function ResultsFilter({
  seasonSelection,
  radioSelection,
  seasonChangeHandler,
  radioChangeHandler,
  getResultsHandler,
}) {
  const [seasonYears, setSeasonYears] = useState([]);
  //   useEffect(() => {
  //     fetch("https://v1.formula-1.api-sports.io/seasons", {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
  //         "x-rapidapi-host": "v1.formula-1.api-sports.io",
  //       },
  //       redirect: "follow",
  //     })
  //       .then((r) => r.json())
  //       .then((data) => console.log(data.response))
  //   }, []);

  useEffect(() => {
    setSeasonYears(selectableYears);
  }, []);

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
