import React, { useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown';
import selectableYears from './testData/selectableYears';


function ResultsFilter() {
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

function generateSelectableYears(yearsArray) {
    return yearsArray.map(year => <Dropdown.Item>{year}</Dropdown.Item>)
}

  return (
    <DropdownButton id="dropdown-basic-button" title="Select Year">
      {selectableYears.map(year => <Dropdown.Item>{year}</Dropdown.Item>)}
    </DropdownButton>
  );
}

export default ResultsFilter;
