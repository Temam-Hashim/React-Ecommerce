import React from "react";
import { IoIosMenu } from "react-icons/io";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaShirtsinbulk } from "react-icons/fa";
import { RiAedElectrodesLine } from "react-icons/ri";
import { TbDeviceDesktopPlus } from "react-icons/tb";
// import { MdOutlineMonitorHeart } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
// import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { GiKidneys } from "react-icons/gi";


function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 nav-part1 justify-content-center">
            <div className="catWrapper">
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
          </div>

          <div className="col-sm-10 nav-part2 d-flex align-items-center  justify-content-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Men
                    <span className="ms-2 mt-0">
                      <FaAngleDown size={18} />
                    </span>
                  </Button>
                </Link>

                <div className="submenu shadow row">
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Women
                    <span className="ms-2 mt-0">
                      <FaAngleDown size={18} />
                    </span>
                  </Button>
                </Link>
                <div className="submenu shadow row">
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Kids
                    <span className="ms-2 mt-0">
                      <FaAngleDown size={18} />
                    </span>
                  </Button>
                </Link>
                <div className="submenu shadow row">
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>FootWear</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>Jeweller</Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Electronics
                    <span className="ms-2 mt-0">
                      <FaAngleDown size={18} />
                    </span>
                  </Button>
                </Link>
                <div className="submenu shadow row">
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Mobile</Button>
                    </Link>
                    <Link to="/">
                      <Button>Laptop</Button>
                    </Link>
                    <Link to="/">
                      <Button>Desktop</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Mobile</Button>
                    </Link>
                    <Link to="/">
                      <Button>Laptop</Button>
                    </Link>
                    <Link to="/">
                      <Button>Desktop</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Mobile</Button>
                    </Link>
                    <Link to="/">
                      <Button>Laptop</Button>
                    </Link>
                    <Link to="/">
                      <Button>Desktop</Button>
                    </Link>
                    <Link to="/">
                      <Button>Watches</Button>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Beauty
                    <span className="ms-2 mt-0">
                      <FaAngleDown size={18} />
                    </span>
                  </Button>
                </Link>
                <div className="submenu shadow row">
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Makeup</Button>
                    </Link>
                    <Link to="/">
                      <Button>Skincare</Button>
                    </Link>
                    <Link to="/">
                      <Button>Haircare</Button>
                    </Link>
                    <Link to="/">
                      <Button>Fragrance</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Bath</Button>
                    </Link>
                    <Link to="/">
                      <Button>Grooming</Button>
                    </Link>
                    <Link to="/">
                      <Button>Accessories</Button>
                    </Link>
                    <Link to="/">
                      <Button>Nail Care</Button>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <p className="submenu-title">Lists</p>
                    <Link to="/">
                      <Button>Natural</Button>
                    </Link>
                    <Link to="/">
                      <Button>K-Beauty</Button>
                    </Link>
                    <Link to="/">
                      <Button>Travel </Button>
                    </Link>
                    <Link to="/">
                      <Button>Gifts</Button>
                    </Link>
                  </div>
                </div>
              </li>

              <li className="list-inline-item">
                <Link to="/">
                  <Button>
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
