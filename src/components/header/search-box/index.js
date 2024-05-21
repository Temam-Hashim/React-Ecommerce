
import { Button } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";

function HeaderSearch() {
  return (
    <div className="headerSearch ms-3 align-items-center">
      <input type="text" placeholder="What are you looking for?" />
      <Button>
        <IoSearch />
      </Button>
    </div>
  );
}

export default HeaderSearch;
