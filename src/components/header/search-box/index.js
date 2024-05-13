
import { Button } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";

function HeaderSearch() {
  return (
    <div className="headerSearch">
      <input type="text" placeholder="What are you looking for?" />
      <Button>
        <IoSearch />
      </Button>
    </div>
  );
}

export default HeaderSearch;
