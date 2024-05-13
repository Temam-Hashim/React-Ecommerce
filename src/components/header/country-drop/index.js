import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

function CountryDrop() {
  return (
    <Button className="countryDrop">
      <div className="info d-flex flex-column">
        <span className="label">Your Location</span>
        <span className="name">Ethiopia</span>
      </div>
      <span className="ml-auto"><FaAngleDown/></span>
    </Button>
  );
}

export default CountryDrop;
