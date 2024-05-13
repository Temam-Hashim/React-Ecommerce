import React from "react";
import { IoIosMenu } from "react-icons/io";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaShirtsinbulk } from "react-icons/fa";
import { RiAedElectrodesLine } from "react-icons/ri";
import { TbDeviceDesktopPlus } from "react-icons/tb";






function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3 nav-part1">
            <Button className="all-cat-tab align-items-center ">
              <span className="me-2" style={{ marginRight: 3 }}>
                <IoIosMenu size={20} />
              </span>
              <span class="text">ALL CATEGORIES</span>
              <span className="ms-2">
                <FaAngleDown size={15} />
              </span>
            </Button>
          </div>
          <div className="col-md-9 nav-part2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">Home  <span className="ms-2"><FaAngleDown/></span></Link>

              </li>
              <li className="list-inline-item">
                <Link to="/">Shop <span className="ms-2"><FaAngleDown/></span></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <span className="me-1"><FaShirtsinbulk size={18}/></span> Fashion</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <span className="me-1"><TbDeviceDesktopPlus size={18}/></span> Electronics</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"> <span className="me-1"><RiAedElectrodesLine size={18}/></span> Furniture</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Beauty</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Food</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Blog</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
