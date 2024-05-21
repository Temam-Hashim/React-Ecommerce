import React from "react";
import { IoIosMenu } from "react-icons/io";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaShirtsinbulk } from "react-icons/fa";
import { RiAedElectrodesLine } from "react-icons/ri";
import { TbDeviceDesktopPlus } from "react-icons/tb";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
// import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { LuContact } from "react-icons/lu";

function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 nav-part1 justify-content-center">
            <Button className="all-cat-tab align-items-center ">
              <span className="me-2">
                <IoIosMenu size={20} />
              </span>
              <span class="text">ALL CATEGORIES</span>
              <span className="ms-2">
                <FaAngleDown size={15} />
              </span>
            </Button>
          </div>

          <div className="col-sm-10 nav-part2 d-flex align-items-center  justify-content-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Home{" "}
                    <span className="ms-2 mt-0">
                      <FaAngleDown size={18} />
                    </span>
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Shop{" "}
                    <span className="ms-2 mt-0">
                      <FaAngleDown size={18} />
                    </span>
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    {" "}
                    <span>
                      <FaShirtsinbulk />
                    </span>
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    {" "}
                    <span>
                      <TbDeviceDesktopPlus />
                    </span>
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    {" "}
                    <span>
                      <RiAedElectrodesLine />
                    </span>
                    Furniture
                  </Button>
                </Link>
              </li>
              {/* <li className="list-inline-item">
                <Link to="/"><span ><MdOutlineMonitorHeart /></span>  Beauty</Link>
              </li> */}
              {/* <li className="list-inline-item">
                <Link to="/"><span ><MdOutlineEmojiFoodBeverage /></span> Food</Link>
              </li> */}
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    {" "}
                    <span>
                      <FaBlog />
                    </span>
                    Blog
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    {" "}
                    <span>
                      <LuContact />
                    </span>
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
